codebrowser.view.SnapshotTagsView = Backbone.View.extend({

    id: 'snapshot-tags-container',
    template: Handlebars.templates.SnapshotTagsContainer,

    events: {

        'click [data-action="create"]': 'create',
        'click [data-action="delete"]': 'delete'

    },

    collection: new codebrowser.collection.TagCollection(),

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        // Template
        var output = $(this.template({ tags: this.collection.toJSON() }));

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

        this.collection = new codebrowser.collection.TagCollection(null, { instanceId: this.snapshot.get('instanceId'),
                                                                           studentId: this.snapshot.get('studentId'),
                                                                           courseId: this.snapshot.get('courseId'),
                                                                           exerciseId: this.snapshot.get('exerciseId') });

        // Render on add and remove
        this.collection.on('add', $.proxy(this.render, this));
        this.collection.on('remove', $.proxy(this.render, this));

        var self = this;

        // Fetch tags
        this.collection.fetch({

            beforeSend: function (request) {

                codebrowser.controller.AuthenticationController.setCredentials(request);
            },

            cache: true,
            expires: 120,

            success: function () {

                self.render();
            },

            error: function () {

                throw new Error('Failed tags fetch.');
            }
        });
    },

    /* Actions */

    create: function (event) {

        var self = this;

        event.preventDefault();

        var text = $('[data-id="tag"]', this.$el).val().trim();

        if (!text) {
            return;
        }

        // New tag
        var tag = new codebrowser.model.Tag(null, { instanceId: this.snapshot.get('instanceId'),
                                                    studentId: this.snapshot.get('studentId'),
                                                    courseId: this.snapshot.get('courseId'),
                                                    exerciseId: this.snapshot.get('exerciseId') });

        // Save tag
        tag.save({ name: text }, {

            beforeSend: function (request) {

                codebrowser.controller.AuthenticationController.setCredentials(request);
            },

            success: function () {

                // Add to collection
                self.collection.add(tag, { at: 0 });
            },

            error: function () {

                throw new Error('Failed tag save.');
            }
        });
    },

    'delete': function (event) {

        var self = this,
            id = $(event.target).data('id'),
            tag = this.collection.get(id);

        // Destroy tag
        tag.destroy({

            beforeSend: function (request) {

                codebrowser.controller.AuthenticationController.setCredentials(request);
            },

            success: function () {

                // Remove from collection
                self.collection.remove(tag);
            },

            error: function () {

                throw new Error('Failed tag delete.')
            }
        });
    }
});
