describe('File', function () {

    var students = new codebrowser.collection.StudentCollection();
    students.fetch({ async: false });

    var courses = new codebrowser.collection.CourseCollection({ 'studentId' : 2 });
    courses.fetch({ async: false });

    var student, course, exercise, snapshots, file;

    beforeEach(function () {

        // Reset store
        Backbone.Relational.store.reset();

        // Get existing IDs
        student = students.at(0);
        course = courses.at(0);
        exercise = course.get('exercises').at(0);

        // Snapshots
        snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: student.id, courseId: course.id, exerciseId: exercise.id });
        snapshots.fetch({ async: false });
    });

    it('should have correct URL root through a snapshot', function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
        file = codebrowser.model.File.findOrCreate({ id: 5 });

        file.set('snapshot', snapshot);

        expect(file.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files');
    });

    it('should have correct URL root through a collection of snapshots', function () {

        var snapshot = snapshots.at(0);
        file = snapshot.get('files').at(0);

        expect(file.urlRoot()).toBe(config.api.main.root +
                                    'students/' +
                                    student.id +
                                    '/courses/' +
                                    course.id +
                                    '/exercises/' +
                                    exercise.id +
                                    '/snapshots/' +
                                    snapshot.id + '/files');
    });

    it('should have correct URL', function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
        file = codebrowser.model.File.findOrCreate({ id: 5 });

        file.set('snapshot', snapshot);

        expect(file.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files/5');
    });

    it('get content should standardise line endings', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\nSecond line.\r\nThird line.\rLast line.';

        expect(file.getContent()).not.toMatch(/\r/);
    });

    it('get content should convert tabs to four spaces', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = '\tFirst line.';

        expect(file.getContent()).not.toMatch(/\t/);
        expect(file.getContent()).toMatch(/ {4}/);
    });

    it('get content should not trim empty lines if setting is not set', function () {

        localStorage.setItem(config.storage.setting.editor.ignoreEmptyLines, false);

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\n   ';

        expect(file.getContent()).toMatch(/^ +$/gm);
    });

    it('get content should trim empty lines if setting is set', function () {

        localStorage.setItem(config.storage.setting.editor.ignoreEmptyLines, true);

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\n   ';

        expect(file.getContent()).not.toMatch(/^ +$/gm);
    });

    it('should return correct line count', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\nSecond line.\nThird line.';

        expect(file.lines()).toBe(3);
    });

    it('should return correct folder', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1, name: 'path/to/File.java' });

        expect(file.getFolder()).toBe('path/to');
    });

    it('should return correct name', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1, name: 'path/to/File.java' });

        expect(file.getName()).toBe('File.java');
    });

    it('should fetch content for an existing file', function (done) {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: student.id,
                                                                 courseId: course.id,
                                                                 exerciseId: exercise.id,
                                                                 id: snapshots.at(0).id });
        snapshot.fetch({ async: false });

        snapshot.get('files').at(0).fetchContent(function (content) {

            expect(content).not.toBeNull();
            done();
        });
    });

    it('fetch content for a non-existent file should return an error', function (done) {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: student.id,
                                                                 courseId: course.id,
                                                                 exerciseId: exercise.id,
                                                                 id: snapshots.at(0).id });
        snapshot.fetch({ async: false });

        // Change the file ID to something wrong
        snapshot.get('files').at(0).id = 0;
        snapshot.get('files').at(0).fetchContent(function (content, error) {

            expect(error).not.toBeNull();
            done();
        });
    });
});
