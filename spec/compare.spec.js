var TurkishString = require('../src/turkish-string.js');

describe('TurkishString comparison methods tests', function () {

    var COMPARISON_RESULT = {
        LESS_THAN: -1, EQUAL: 0, GREATER_THAN: 1
    };

    it('TurkishString.compare should throw error when one of the parameters is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (var i = 0; i < invalidParameters.length; i++) {

            var invalidParameter = invalidParameters[i];

            expect(function(){TurkishString.compare(invalidParameter, '')}).toThrowError(/resolve/);
            expect(function(){TurkishString.compare(invalidParameter, new TurkishString(''))}).toThrowError(/resolve/);
            expect(function(){TurkishString.compare('', invalidParameter)}).toThrowError(/resolve/);
            expect(function(){TurkishString.compare(new TurkishString(''), invalidParameter)}).toThrowError(/resolve/);
        }
    });

    it('TurkishString.compare should return zero when two parameter is equal', function () {

        var leftValues = ['', 'çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ', 'cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ'];
        var rightValues = ['', 'çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ', 'cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ'];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var turkishString = new TurkishString(leftValue);

            expect(TurkishString.compare(leftValue, rightValue)).toBe(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(leftValue, turkishString)).toBe(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(turkishString, rightValue)).toBe(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(turkishString, turkishString)).toBe(COMPARISON_RESULT.EQUAL);
        }
    });

    it('TurkishString.compare should return -1 when first parameter is less than second parameter', function () {

        var leftValues = ['c', 'ı', 'g', 'o', 's', 'u', 'c', 'ı', 'g', 'o', 's', 'u'];
        var rightValues = ['ç', 'i', 'ğ', 'ö', 'ş', 'ü', 'c ', 'ı ', 'g ', 'o ', 's ', 'u '];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var sourceTurkishString = new TurkishString(leftValue);
            var destinationTurkishString = new TurkishString(rightValue);

            expect(TurkishString.compare(leftValue, rightValue)).toBe(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(leftValue, destinationTurkishString)).toBe(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(sourceTurkishString, rightValue)).toBe(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(sourceTurkishString, destinationTurkishString)).toBe(COMPARISON_RESULT.LESS_THAN);
        }
    });

    it('TurkishString.isLessThan should return true when first parameter is less than second parameter', function () {

        var leftValues = ['c', 'ı', 'g', 'o', 's', 'u', 'c', 'ı', 'g', 'o', 's', 'u'];
        var rightValues = ['ç', 'i', 'ğ', 'ö', 'ş', 'ü', 'c ', 'ı ', 'g ', 'o ', 's ', 'u '];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var turkishString = new TurkishString(leftValue);
            var sourceTurkishString = new TurkishString(leftValue);
            var destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isLessThan(rightValue)).toBe(true);
            expect(turkishString.isLessThan(destinationTurkishString)).toBe(true);
            expect(TurkishString.isLessThan(leftValue, rightValue)).toBe(true);
            expect(TurkishString.isLessThan(leftValue, destinationTurkishString)).toBe(true);
            expect(TurkishString.isLessThan(sourceTurkishString, rightValue)).toBe(true);
            expect(TurkishString.isLessThan(sourceTurkishString, destinationTurkishString)).toBe(true);
        }
    });

    it('TurkishString.isLessThanOrEqual should return true when first parameter is less than or equal to second parameter', function () {

        var leftValues = ['c', 'ı', 'g', 'o', 's', 'u', 'c', 'ı', 'g', 'o', 's', 'u'];
        var rightValues = ['ç', 'i', 'ğ', 'ö', 'ş', 'ü', 'c', 'ı', 'g', 'o', 's', 'u'];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var turkishString = new TurkishString(leftValue);
            var sourceTurkishString = new TurkishString(leftValue);
            var destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isLessThanOrEqual(rightValue)).toBe(true);
            expect(turkishString.isLessThanOrEqual(destinationTurkishString)).toBe(true);
            expect(TurkishString.isLessThanOrEqual(leftValue, rightValue)).toBe(true);
            expect(TurkishString.isLessThanOrEqual(leftValue, destinationTurkishString)).toBe(true);
            expect(TurkishString.isLessThanOrEqual(sourceTurkishString, rightValue)).toBe(true);
            expect(TurkishString.isLessThanOrEqual(sourceTurkishString, destinationTurkishString)).toBe(true);
        }
    });

    it('TurkishString.compare should return +1 when first parameter is less than second parameter', function () {

        var leftValues = ['ç', 'i', 'ğ', 'ö', 'ş', 'ü ', 'ç ', 'i ', 'ğ ', 'ö ', 'ş ', 'ü '];
        var rightValues = ['c', 'ı', 'g', 'o', 's', 'u', 'ç', 'i', 'ğ', 'ö', 'ş', 'ü'];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var sourceTurkishString = new TurkishString(leftValue);
            var destinationTurkishString = new TurkishString(rightValue);

            expect(TurkishString.compare(leftValue, rightValue)).toBe(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(leftValue, destinationTurkishString)).toBe(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(sourceTurkishString, rightValue)).toBe(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(sourceTurkishString, destinationTurkishString)).toBe(COMPARISON_RESULT.GREATER_THAN);
        }
    });

    it('TurkishString.isGreaterThan should return +1 when first parameter is less than second parameter', function () {

        var leftValues = ['ç', 'i', 'ğ', 'ö', 'ş', 'ü ', 'ç ', 'i ', 'ğ ', 'ö ', 'ş ', 'ü '];
        var rightValues = ['c', 'ı', 'g', 'o', 's', 'u', 'ç', 'i', 'ğ', 'ö', 'ş', 'ü'];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var turkishString = new TurkishString(leftValue);
            var sourceTurkishString = new TurkishString(leftValue);
            var destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isGreaterThan(rightValue)).toBe(true);
            expect(turkishString.isGreaterThan(destinationTurkishString)).toBe(true);
            expect(TurkishString.isGreaterThan(leftValue, rightValue)).toBe(true);
            expect(TurkishString.isGreaterThan(leftValue, destinationTurkishString)).toBe(true);
            expect(TurkishString.isGreaterThan(sourceTurkishString, rightValue)).toBe(true);
            expect(TurkishString.isGreaterThan(sourceTurkishString, destinationTurkishString)).toBe(true);
        }
    });

    it('TurkishString.isGreaterThanOrEqual should return +1 when first parameter is less than oe equal to second parameter', function () {

        var leftValues = ['ç', 'i', 'ğ', 'ö', 'ş', 'ü ', 'ç ', 'i', 'ğ', 'ö', 'ş', 'ü'];
        var rightValues = ['c', 'ı', 'g', 'o', 's', 'u', 'ç', 'i', 'ğ', 'ö', 'ş', 'ü'];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var turkishString = new TurkishString(leftValue);
            var sourceTurkishString = new TurkishString(leftValue);
            var destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isGreaterThanOrEqual(rightValue)).toBe(true);
            expect(turkishString.isGreaterThanOrEqual(destinationTurkishString)).toBe(true);
            expect(TurkishString.isGreaterThanOrEqual(leftValue, rightValue)).toBe(true);
            expect(TurkishString.isGreaterThanOrEqual(leftValue, destinationTurkishString)).toBe(true);
            expect(TurkishString.isGreaterThanOrEqual(sourceTurkishString, rightValue)).toBe(true);
            expect(TurkishString.isGreaterThanOrEqual(sourceTurkishString, destinationTurkishString)).toBe(true);
        }
    });

});

