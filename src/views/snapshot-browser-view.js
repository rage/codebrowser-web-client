codebrowser.view.SnapshotBrowserView = Backbone.View.extend({

    id: 'snapshot-browser-container',

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        // Files
        this.snapshotFilesView = new codebrowser.view.SnapshotFilesView({ parentView: this });
        this.$el.append(this.snapshotFilesView.el);

        // Tags
        this.snapshotTagsView = new codebrowser.view.SnapshotTagsView();
        this.$el.append(this.snapshotTagsView.el);
    },

    /* Remove */

    remove: function () {

        // Remove files view
        this.snapshotFilesView.remove();

        // Remove tags view
        this.snapshotTagsView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Update */

    update: function (snapshot, file, courseRoute) {

        // Update files view
        this.snapshotFilesView.update(snapshot, file, courseRoute);

        // Update tags view
        this.snapshotTagsView.update(snapshot);
    }
});
