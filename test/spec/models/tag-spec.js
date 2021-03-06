describe('Tag', function () {

    var missingAttributesError = 'Attributes instanceId, studentId, courseId and exerciseId are required to fetch a tag.',
        tag;

    beforeEach(function () {

        tag = codebrowser.model.Tag.findOrCreate({ id: 4 }, { instanceId: 1, studentId: 2, courseId: 3, exerciseId: 4 });
    });

    it('should have correct URL root', function () {

        expect(tag.urlRoot()).toBe(config.api.main.root + '1/students/2/courses/3/exercises/4/tags');
    });

    it('fetch should throw error if no studentId is passed', function () {

        tag = codebrowser.model.Tag.findOrCreate({ id: 5 }, { courseId: 2, exerciseId: 3 });

        expect(function () { tag.fetch() }).toThrowError(missingAttributesError);
    });

    it('fetch should throw error if no courseId is passed', function () {

        tag = codebrowser.model.Tag.findOrCreate({ id: 6 }, { studentId: 1, exerciseId: 3 });

        expect(function () { tag.fetch() }).toThrowError(missingAttributesError);
    });

    it('fetch should throw error if no exerciseId is passed', function () {

        tag = codebrowser.model.Tag.findOrCreate({ id: 7 }, { studentId: 1, courseId: 2 });

        expect(function () { tag.fetch() }).toThrowError(missingAttributesError);
    });

    it('should have correct IDs through collection', function () {

        var tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
        tag = codebrowser.model.Tag.findOrCreate({ id: 8 }, { collection: tags });

        expect(tag.studentId).toBe(1);
        expect(tag.courseId).toBe(2);
        expect(tag.exerciseId).toBe(3);
    });
});
