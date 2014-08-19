casper.test.begin('Students view (all students)', 12, function suite(test) {

    mockData = {

        'students': [
            { id: 21, name: 'student 1', courses: [ {}, {} ] },
            { id: 22, name: 'student 2', courses: [ {}, {}, {} ] },
            { id: 23, name: 'student 3', courses: [ {}, {}, {}, {} ] }
        ]

    };

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('Students', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/students$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
        test.assertTextExists('Students (3)', 'has title "students (3)"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 students listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/21/courses">student 1') !== -1,
                                                 'has "student 1" with a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses">student 2') !== -1,
                                                 'has "student 3" with a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/23/courses">student 3') !== -1,
                                                 'has "student 3" with a correct link to course list');

        function cntCrs1() { return $('tr:contains(student 1)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntCrs1, '2', 'has course count 2 for "student 1"');

        function cntCrs2() { return $('tr:contains(student 2)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntCrs2, '3', 'has course count 3 for "student 2"');

        function cntCrs3() { return $('tr:contains(student 3)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntCrs3, '4', 'has course count 4 for "student 3"');
    });

    casper.then(function () {

        this.echo('Searching students with string "ent 2"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 students listed');
        test.assertSelectorHasText('tbody tr td a', 'student 1', 'has name in second cell of first row in students table');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Students view (course-exercise students)', 6, function suite(test) {

    mockData = {

        'courses': [
            { id: 11, name: 'course 1', exercises: [ { id: 31, name: 'exc 1' }, { id: 32, name: 'exc 2' } ] },
            { id: 12, name: 'course 2', exercises: [ { id: 31, name: 'exc 1' }, { id: 32, name: 'exc 2' }, { id: 33, name: 'exc 3' } ] }
        ],

        'courses/11': { id: 11, name: 'course 1', exercises: [ { id: 31, name: 'exc 1' }, { id: 32, name: 'exc 2' } ] },

        'courses/11/exercises': [
            { id: 31, name: 'exc 1' },
            { id: 32, name: 'exc 2' }
        ],

        'courses/11/exercises/32': { id: 32, name: 'exc 2' },

        'courses/11/exercises/32/students': [
            { id: 21, name: 'student 1', courses: [ {}, {} ] },
            { id: 22, name: 'student 2', courses: [ {}, {}, {} ] },
        ],

        'students': [
            { id: 21, name: 'student 1', courses: [ {}, {} ] },
            { id: 22, name: 'student 2', courses: [ {}, {}, {} ] },
            { id: 23, name: 'student 3', courses: [ {}, {}, {}, {} ] }
        ]
    };

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.clickLabel('course 1', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.clickLabel('exc 2', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        this.echo('Navigating to student list for "course 1" and "exercise 2"');

        test.assertUrlMatch(new RegExp('/#/courses/11/exercises/32/students'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
        test.assertTextExists('course 1 — exc 2 —  Students (2)', 'has title "course 1 —  exc 2 —  Students (2)"');

        test.assertElementCount('tbody tr', 2, 'has exactly 2 students listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/exercises/32/students/21/snapshots">student 1') !== -1,
                                                 'has "student 1" with a correct link to exercise list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/exercises/32/students/22/snapshots">student 2') !== -1,
                                                 'has "student 2" with a correct link to exercise list');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});
