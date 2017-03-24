var expect = require('expect.js');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.compare tests', function () {

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

    it('TurkishString.compare should return -1 when first parameter is less than second parameter', function () {

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
});