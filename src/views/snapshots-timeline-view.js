codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    template: {

        bottomContainer: Handlebars.templates.SnapshotsTimelineBottomContainer

    },

    /* Absolute width */

    width: 0,

    /* Snapshot elements */

    snapshotElements: [],

    /* Pointer */

    pointerSetOffsetX: 0,

    /* Scroll */

    scroll: null,

    /* Dragging */

    dragging: false,

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        // Hide view until needed
        this.$el.hide();

        /* jshint newcap: false */

        this.paper = Raphael(this.el, '100%', 81);

        /* jshint newcap: true */

        // Bottom container
        this.bottomContainer = $('<div>');
        this.$el.append(this.bottomContainer);
    },

    getViewX: function () {

        var x = 0;

        // Current x of view
        if (this.paper._viewBox) {
            x = this.paper._viewBox[0];
        }

        return x;
    },

    isVisible: function (x) {

        var viewX = this.getViewX(),
            viewWidth = $(this.paper.canvas).width();

        return (x >= viewX && x <= viewX + viewWidth);
    },

    snapshotWeight: function (index) {

        var weight = 0.8;

        // Key-level snapshots have a static weight
        if (this.collection.isKeyLevel()) {
            return weight;
        }

        var difference = this.differences[index],
            percentage = Math.round((difference.total / difference.lines) * 100);

        if (percentage === 0) {
            return weight;
        }

        // Scale between 1 and 2
        weight = 2 * percentage / 100 + 1;

        // Round to nearest .5
        weight = Math.round(weight * 2) / 2;

        return Math.min(2, weight);
    },

    distanceWeight: function (index, min, max) {

        var weight = 0;

        // First snapshot has a static weight
        if (index === 0) {
            return 1;
        }

        // Duration between snapshots
        var duration = this.collection.getDuration(index, index - 1);

        // Scale between 1 and 6
        weight = 5 * (duration - min) / (max - min) + 1;

        // Round up to 2 decimals
        weight = Math.round(weight * 100) / 100;

        return Math.min(6, weight);
    },

    setViewBox: function (x) {

        var viewWidth = $(this.paper.canvas).width();

        // Set view box
        this.paper.setViewBox(x, 0, viewWidth, this.paper.height, false);
    },

    centerOn: function (x) {

        var viewWidth = $(this.paper.canvas).width(),
            center = x - (viewWidth / 2);

        // Don't go under 0
        if (center < 0) {

            this.setViewBox(0);

            return;
        }

        // Don't go over absolute width
        if (center > (this.width - viewWidth)) {

            if (this.width - viewWidth < 0) {
                this.setViewBox(0);
            } else {
                this.setViewBox(this.width - viewWidth);
            }

            return;
        }

        // Center
        this.setViewBox(center);
    },

    focus: function () {

        var index = this.currentSnapshotIndex === 0 ? 0 : -1;

        // Make previous snapshot element visible
        if (!this.isVisible(this.snapshotElements[this.currentSnapshotIndex + index].attr('cx'))) {
            this.render();
            return;
        }

        index = this.currentSnapshotIndex === this.snapshotElements.length - 1 ? 0 : 1;

        // Make next snapshot element visible
        if (!this.isVisible(this.snapshotElements[this.currentSnapshotIndex + index].attr('cx'))) {
            this.render();
            return;
        }
    },

    moveTimeline: function (dx) {

        var viewX = this.getViewX(),
            viewWidth = $(this.paper.canvas).width();

        // Can't move dx to left
        if ((viewX + dx) < 0 && dx < 0) {

            // Move by remainder, but don't go under 0
            this.setViewBox(Math.max(0, 0 - viewX));

            return;
        }

        // Can't move dx to right
        if ((viewX + viewWidth + dx) >= this.width && dx > 0) {

            var remainder = this.width - viewX - viewWidth;

            // Move by remainder
            this.setViewBox(viewX + remainder);

            return;
        }

        // Move viewbox
        this.setViewBox(viewX + dx);

        // Move pointer set
        this.pointerSetOffsetX += dx;
        this.pointerSet.transform('...t ' + dx + ', 0');
    },

    /* Render */

    renderDuration: function (previousSnapshot, snapshot, x, y, radius, distance) {

        if (!previousSnapshot) {
            return;
        }

        // Duration label
        var duration = codebrowser.helper.Duration.calculate(snapshot.get('timestamp'),
                                                             previousSnapshot.get('timestamp'), true);

        if (duration === '0 s') {
            return;
        }

        // Duration element
        var durationElement = this.paper.text(x - radius - distance / 2, y + 30, duration);
        $(durationElement.node).attr('class', 'duration');
    },

    renderTimeline: function (leftOffset, y, x) {

        // Timeline element
        var timeline = this.paper.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshotIndex: function (index, x) {

        // Snapshot index element
        var snapshotIndex = this.paper.text(x, 5, index + 1);

        $(snapshotIndex.node).attr('class', 'snapshot-index');
    },

    renderSnapshotWeight: function (index, x, y) {

        // Key-level snapshots do not have a weight
        if (this.collection.isKeyLevel()) {
            return;
        }

        var difference = this.differences[index],
            percentage = (difference.total / difference.lines).toFixed(2);

        // Snapshot has no changes
        if (percentage === '0.00') {
            return;
        }

        if (percentage !== '1.00') {
            percentage = percentage.slice(1);
        } else {
            percentage = percentage.slice(0,1);
        }

        // Snapshot weight element
        var snapshotWeightElement = this.paper.text(x, y, percentage);

        // Adjust font size by weight
        var snapshotWeight = this.snapshotWeight(index),
            fontSize = 11;

        if (snapshotWeight > 1) {
            fontSize *= snapshotWeight;
        }

        snapshotWeightElement.attr({ 'font-size': fontSize });

        $(snapshotWeightElement.node).attr('class', 'snapshot-weight');
    },

    renderSnapshot: function (snapshot, index, x, y, radius) {

        // Tooltip element
        var tooltipElement = this.paper.path('M' + x + ' ' + this.paper.height + ', L' + x + ' ' + 0);
        $(tooltipElement.node).attr('class', 'area');

        // Display timestamp and event type
        var timestamp = moment(new Date(snapshot.get('timestamp'))).format('D.M.YYYY HH.mm'),
            eventName = this.parentView.eventCollection.get(snapshot.get('id')).get('name');

        $(tooltipElement.node).attr({

            'data-toggle': 'tooltip',
            'title': timestamp + ' — ' + eventName,
            'data-container': 'body'

        });

        // Render index of the snapshot
        this.renderSnapshotIndex(index, x);

        // Snapshot area element
        var snapshotArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(snapshotArea.node).attr('class', 'area');

        // Snapshot element
        var snapshotElement = this.paper.circle(x, y, radius);
        $(snapshotElement.node).attr('class', 'snapshot');

        // Render weight for the snapshot
        this.renderSnapshotWeight(index, x, y);

        // Snapshot click area
        var snapshotClickArea = this.paper.circle(x, y, radius);
        $(snapshotClickArea.node).attr('class', 'area snapshot');

        // Set models for snapshot and snapshot area elements
        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);

        snapshotClickArea.data('snapshot', snapshot);
        snapshotClickArea.data('file', file);

        var self = this;

        snapshotClickArea.click(function () {

            var snapshot = this.data('snapshot'),
                file = this.data('file');

            // Destroy tooltip
            $(snapshotClickArea.node).tooltip('destroy');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file, { course: this.courseRoute });
        });

        snapshotClickArea.mouseover(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1.1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1.1' }, 150);

            // Show tooltip
            if (!self.scroll) {
                $(tooltipElement.node).tooltip('show');
            }
        });

        snapshotClickArea.mouseout(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1' }, 150);

            // Hide tooltip
            $(tooltipElement.node).tooltip('hide');
        });

        return snapshotElement;
    },

    renderPointer: function (x, radius) {

        // Pointer set
        this.pointerSet = this.paper.set();

        var width = 7,
            pointerX = x - width / 2,
            pointerY = this.paper.height,
            pointerLineX = x,
            pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.paper.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        this.pointerSet.push(pointerLine);

        // Pointer element
        var pointer = this.paper.path('M' +
                                      pointerX +
                                      ' ' +
                                      pointerY +
                                      ', L' +
                                      (pointerX + width / 2) +
                                      ' ' +
                                      (pointerY - width) +
                                      ', ' +
                                      (pointerX + width) +
                                      ' ' +
                                      pointerY +
                                      'Z');

        $(pointer.node).attr('class', 'pointer');

        this.pointerSet.push(pointer);

        // Pointer area element
        var pointerArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(pointerArea.node).attr('class', 'area pointer');

        this.pointerSet.push(pointerArea);

        // Bind drag and drag over
        this.pointerSet.drag(this.dragMove, this.dragStart, this.dragEnd, this, this, this)
                       .onDragOver($.proxy(this.dragOver, this));
    },

    render: function () {

        this.snapshotElements = [];

        // Clear paper
        this.paper.clear();

        // Limit minimum to 1 minute and maximum to 5 minutes
        var min = Math.min(60000, this.collection.getMinDuration()),
            max = Math.min(300000, this.collection.getMaxDuration());

        // Center point
        var y = this.paper.height / 2 + 3,
            leftOffset = 0,
            rightOffset = 0,
            x = 0;

        // Range around current snapshot
        this.range = 12;
        var startingSnapshot = this.collection.at(this.currentSnapshotIndex - this.range) || this.collection.at(0),
            start = this.collection.indexOf(startingSnapshot),
            end   = start + this.range * 2 + 1;

        for (var index = start; index < end; index++) {

            var snapshot = this.collection.at(index);

            if (!snapshot) {
                break;
            }

            var distanceWeight = this.distanceWeight(index, min, max),
                snapshotWeight = this.snapshotWeight(index);

            // Weight by duration between snapshots
            var distance = 45 * distanceWeight;

            // Weight by amount of differences between snapshots
            var radius = 12 * snapshotWeight;

            x += (radius * 2);

            if (index === 0) {

                // Left offset
                leftOffset = x;

            } else {

                // Move right by distance
                x += distance;
            }

            if (index === this.collection.length - 1) {

                // Right offset
                rightOffset = radius;
            }

            var previousSnapshot = this.collection.at(index - 1);

            // Render duration between snapshots
            this.renderDuration(previousSnapshot, snapshot, x, y, radius, distance);

            // Render snapshot
            var snapshotElement = this.renderSnapshot(snapshot, index, x, y, radius);
            this.snapshotElements[index] = snapshotElement;

            // Current snapshot
            if (index === this.currentSnapshotIndex) {

                // Render pointer on current snapshot
                this.renderPointer(x, radius);
            }
        }

        // Absolute width
        this.width = leftOffset + x + rightOffset;

        // Center on current snapshot
        this.centerOn(this.snapshotElements[this.currentSnapshotIndex].attr('cx'));

        var first = this.snapshotElements[start],
            originX = Math.min(first.attrs.cx, this.paper._viewBox[0]);

        // Offset is the same as X-coordinate of first snapshot
        if (originX === first.attrs.cx && leftOffset === first.attrs.cx) {
            leftOffset = 0;
        } else if (start !== 0 && originX > 0) {
            leftOffset = -originX;
        }

        // Render timeline
        this.renderTimeline(originX + leftOffset, y, x);

        // View attributes
        var attributes = {

            first: this.collection.first().toJSON(),
            last: this.collection.last().toJSON()

        }

        // Template for bottom container
        var bottomContainerOutput = this.template.bottomContainer(attributes);

        // Update bottom container
        this.bottomContainer.html(bottomContainerOutput, bottomContainerOutput);
    },

    /* Update */

    updatePointer: function () {

        // Remove previous pointer
        if (this.pointerSet) {

            this.pointerSet.items.forEach(function (item) {

                item.remove();
            });
        }

        // Render new pointer
        var element = this.snapshotElements[this.currentSnapshotIndex];

        // Element out of bounds, render new timeline chunk
        if (!element || !this.snapshotElements[this.currentSnapshotIndex - 1]) {
            this.render();
            return;
        }

        this.renderPointer(element.attr('cx'), element.attr('r'));

        // Focus
        this.focus();
    },

    update: function (collection, currentSnapshotIndex, filename, courseRoute) {

        this.collection = collection;
        this.courseRoute = courseRoute;

        // No need to show timeline
        if (this.collection.length === 1) {
            this.$el.hide();
            return;
        }

        // Show view if necessary
        this.$el.show();

        this.currentSnapshotIndex = currentSnapshotIndex;
        this.filename = filename;

        // Calculate differences between snapshots before continuing
        this.differences = this.collection.getDifferences();

        // Render if user is not dragging, update pointer after first render
        if (!this.dragging) {
            this.snapshotElements.length === 0 ? this.render() : this.updatePointer();
        }
    },

    /* Events */

    didResize: function () {

        // No snapshots
        if (this.snapshotElements.length === 0) {
            return;
        }

        // Re-render
        this.render();
    },

    dragStart: function () {

        this.dragging = true;
    },

    dragEnd: function () {

        this.dragging = false;
        this.pointerSetOffsetX = 0;

        this.stopScroll();
        this.render();
    },

    dragMove: function (dx, dy, x) {

        if ((this.currentSnapshotIndex === this.collection.length - 1 && dx > 0) ||
            (this.currentSnapshotIndex === 0 && dx < 0)) {

            return;
        }

        // Move pointer set
        this.pointerSet.transform('T ' + (this.pointerSetOffsetX + dx) + ', 0');

        var viewWidth = $(this.paper.canvas).width(),
            canvasOffset = $(this.paper.canvas).offset(),
            leftOffset = canvasOffset.left,
            rightOffset = canvasOffset.left + viewWidth;

        // Move timeline to left
        if (x < leftOffset + 50) {

            this.startScroll(-5);

            return;
        }

        // Move timeline to right
        if (x > rightOffset - 50) {

            this.startScroll(5);

            return;
        }

        this.stopScroll();
    },

    dragOver: function (element) {

        // Snapshot element
        if (element.data('snapshot')) {
            this.parentView.navigate(element.data('snapshot'), element.data('file'), { course: this.courseRoute });
        }
    },

    /* Actions */

    startScroll: function (dx) {

        if (this.scroll) {
            return;
        }

        var self = this;

        // Scroll dx 60 times a second
        this.scroll = setInterval(function () {

            self.moveTimeline(dx);

        }, 1000 / 60);
    },

    stopScroll: function () {

        if (this.scroll) {
            clearInterval(this.scroll);
            this.scroll = false;
        }
    }
});
