describe('Duration', function () {

    it('should return time difference as seconds', function () {

        expect(codebrowser.helper.Duration.calculate(1360332833591, 1360332812583)).toBe('21 seconds');
    });

    it('should return time difference as minutes', function () {

        expect(codebrowser.helper.Duration.calculate(1360333509006, 1360332833591)).toBe('11 minutes');
    });

    it('should return time difference as hours', function () {

        expect(codebrowser.helper.Duration.calculate(20000000, 6000000)).toBe('4 hours');
    });

    it('should return time difference as days', function () {

        expect(codebrowser.helper.Duration.calculate(1360329948801, 1359642309317)).toBe('8 days');
    });

    it('should return zero time difference in pluralized form (0 seconds)', function () {

        expect(codebrowser.helper.Duration.calculate(1340339600659, 1340339600659)).toBe('0 seconds');
    });

    it('should return time difference expressed in singular form (1 second/minute/hour/day)', function () {

        expect(codebrowser.helper.Duration.calculate(1360339600659, 1360339599653)).toBe('1 second');
    });

    it('should return time difference as simplified seconds', function () {

        expect(codebrowser.helper.Duration.calculate(1360332833591, 1360332812583, true)).toBe('21 s');
    });

    it('should return time difference as simplified minutes', function () {

        expect(codebrowser.helper.Duration.calculate(1360333509006, 1360332833591, true)).toBe('11 m');
    });

    it('should return time difference as simplified hours', function () {

        expect(codebrowser.helper.Duration.calculate(20000000, 6000000, true)).toBe('4 h');
    });

    it('should return time difference as simplified days', function () {

        expect(codebrowser.helper.Duration.calculate(1360329948801, 1359642309317, true)).toBe('8 d');
    });

    it('should work through Handlebars', function () {

        expect(Handlebars.helpers.duration(1360329948801, 1359642309317)).toBe('8 days');
    });
});
