var expect = require('expect.js');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString comparison methods tests', function () {

    var COMPARISON_RESULT = {
        LESS_THAN: -1, EQUAL: 0, GREATER_THAN: 1
    };

    it('TurkishString.compare should return zero when two parameter is equal', function () {

        var leftValues = ['', 'çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ', 'cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ'];
        var rightValues = ['', 'çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ', 'cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ'];

        for (var i = 0; i < leftValues.length; i++) {

            var leftValue = leftValues[i];
            var rightValue = rightValues[i];

            var turkishString = new TurkishString(leftValue);

            expect(TurkishString.compare(leftValue, rightValue)).to.equal(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(leftValue, turkishString)).to.equal(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(turkishString, rightValue)).to.equal(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(turkishString, turkishString)).to.equal(COMPARISON_RESULT.EQUAL);
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

            expect(TurkishString.compare(leftValue, rightValue)).to.equal(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(leftValue, destinationTurkishString)).to.equal(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(sourceTurkishString, rightValue)).to.equal(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(sourceTurkishString, destinationTurkishString)).to.equal(COMPARISON_RESULT.LESS_THAN);
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

            expect(turkishString.isLessThan(rightValue)).to.equal(true);
            expect(turkishString.isLessThan(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThan(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isLessThan(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThan(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isLessThan(sourceTurkishString, destinationTurkishString)).to.equal(true);
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

            expect(turkishString.isLessThanOrEqual(rightValue)).to.equal(true);
            expect(turkishString.isLessThanOrEqual(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(sourceTurkishString, destinationTurkishString)).to.equal(true);
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

            expect(TurkishString.compare(leftValue, rightValue)).to.equal(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(leftValue, destinationTurkishString)).to.equal(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(sourceTurkishString, rightValue)).to.equal(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(sourceTurkishString, destinationTurkishString)).to.equal(COMPARISON_RESULT.GREATER_THAN);
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

            expect(turkishString.isGreaterThan(rightValue)).to.equal(true);
            expect(turkishString.isGreaterThan(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThan(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThan(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThan(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThan(sourceTurkishString, destinationTurkishString)).to.equal(true);
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

            expect(turkishString.isGreaterThanOrEqual(rightValue)).to.equal(true);
            expect(turkishString.isGreaterThanOrEqual(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(sourceTurkishString, destinationTurkishString)).to.equal(true);
        }
    });

});

