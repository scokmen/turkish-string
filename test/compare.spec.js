const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("TurkishString comparison methods tests", function () {

    const COMPARISON_RESULT = { LESS_THAN: -1, EQUAL: 0, GREATER_THAN: 1 };

    it("TurkishString.compare should throw error when one of the parameters is invalid", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            const invalidParameter = invalidParameters[i];

            expect(function(){TurkishString.compare(invalidParameter, "")}).to.throw(/resolve/);
            expect(function(){TurkishString.compare(invalidParameter, new TurkishString(""))}).to.throw(/resolve/);
            expect(function(){TurkishString.compare("", invalidParameter)}).to.throw(/resolve/);
            expect(function(){TurkishString.compare(new TurkishString(""), invalidParameter)}).to.throw(/resolve/);
        }
    });

    it("TurkishString.compare should return zero when two parameter is equal", function () {

        const leftValues = ["", "çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ", "cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ"];
        const rightValues = ["", "çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ", "cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ"];

        for (let i = 0; i < leftValues.length; i++) {

            const leftValue = leftValues[i];
            const rightValue = rightValues[i];
            const turkishString = new TurkishString(leftValue);

            expect(TurkishString.compare(leftValue, rightValue)).to.equal(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(leftValue, turkishString)).to.equal(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(turkishString, rightValue)).to.equal(COMPARISON_RESULT.EQUAL);
            expect(TurkishString.compare(turkishString, turkishString)).to.equal(COMPARISON_RESULT.EQUAL);
        }
    });

    it("TurkishString.compare should return -1 when first parameter is less than second parameter", function () {

        const leftValues = ["c", "ı", "g", "o", "s", "u", "c", "ı", "g", "o", "s", "u"];
        const rightValues = ["ç", "i", "ğ", "ö", "ş", "ü", "c ", "ı ", "g ", "o ", "s ", "u "];

        for (let i = 0; i < leftValues.length; i++) {

            const leftValue = leftValues[i];
            const rightValue = rightValues[i];
            const sourceTurkishString = new TurkishString(leftValue);
            const destinationTurkishString = new TurkishString(rightValue);

            expect(TurkishString.compare(leftValue, rightValue)).to.equal(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(leftValue, destinationTurkishString)).to.equal(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(sourceTurkishString, rightValue)).to.equal(COMPARISON_RESULT.LESS_THAN);
            expect(TurkishString.compare(sourceTurkishString, destinationTurkishString)).to.equal(COMPARISON_RESULT.LESS_THAN);
        }
    });

    it("TurkishString.isLessThan should return true when first parameter is less than second parameter", function () {

        const leftValues = ["c", "ı", "g", "o", "s", "u", "c", "ı", "g", "o", "s", "u"];
        const rightValues = ["ç", "i", "ğ", "ö", "ş", "ü", "c ", "ı ", "g ", "o ", "s ", "u "];

        for (let i = 0; i < leftValues.length; i++) {

            const leftValue = leftValues[i];
            const rightValue = rightValues[i];
            const turkishString = new TurkishString(leftValue);
            const sourceTurkishString = new TurkishString(leftValue);
            const destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isLessThan(rightValue)).to.equal(true);
            expect(turkishString.isLessThan(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThan(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isLessThan(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThan(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isLessThan(sourceTurkishString, destinationTurkishString)).to.equal(true);
        }
    });

    it("TurkishString.isLessThanOrEqual should return true when first parameter is less than or equal to second parameter", function () {

        const leftValues = ["c", "ı", "g", "o", "s", "u", "c", "ı", "g", "o", "s", "u"];
        const rightValues = ["ç", "i", "ğ", "ö", "ş", "ü", "c", "ı", "g", "o", "s", "u"];

        for (let i = 0; i < leftValues.length; i++) {

            const leftValue = leftValues[i];
            const rightValue = rightValues[i];
            const turkishString = new TurkishString(leftValue);
            const sourceTurkishString = new TurkishString(leftValue);
            const destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isLessThanOrEqual(rightValue)).to.equal(true);
            expect(turkishString.isLessThanOrEqual(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isLessThanOrEqual(sourceTurkishString, destinationTurkishString)).to.equal(true);
        }
    });

    it("TurkishString.compare should return +1 when first parameter is less than second parameter", function () {

        const leftValues = ["ç", "i", "ğ", "ö", "ş", "ü ", "ç ", "i ", "ğ ", "ö ", "ş ", "ü "];
        const rightValues = ["c", "ı", "g", "o", "s", "u", "ç", "i", "ğ", "ö", "ş", "ü"];

        for (let i = 0; i < leftValues.length; i++) {

            const leftValue = leftValues[i];
            const rightValue = rightValues[i];
            const sourceTurkishString = new TurkishString(leftValue);
            const destinationTurkishString = new TurkishString(rightValue);

            expect(TurkishString.compare(leftValue, rightValue)).to.equal(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(leftValue, destinationTurkishString)).to.equal(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(sourceTurkishString, rightValue)).to.equal(COMPARISON_RESULT.GREATER_THAN);
            expect(TurkishString.compare(sourceTurkishString, destinationTurkishString)).to.equal(COMPARISON_RESULT.GREATER_THAN);
        }
    });

    it("TurkishString.isGreaterThan should return +1 when first parameter is less than second parameter", function () {

        const leftValues = ["ç", "i", "ğ", "ö", "ş", "ü ", "ç ", "i ", "ğ ", "ö ", "ş ", "ü "];
        const rightValues = ["c", "ı", "g", "o", "s", "u", "ç", "i", "ğ", "ö", "ş", "ü"];

        for (let i = 0; i < leftValues.length; i++) {

            const leftValue = leftValues[i];
            const rightValue = rightValues[i];
            const turkishString = new TurkishString(leftValue);
            const sourceTurkishString = new TurkishString(leftValue);
            const destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isGreaterThan(rightValue)).to.equal(true);
            expect(turkishString.isGreaterThan(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThan(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThan(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThan(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThan(sourceTurkishString, destinationTurkishString)).to.equal(true);
        }
    });

    it("TurkishString.isGreaterThanOrEqual should return +1 when first parameter is less than oe equal to second parameter", function () {

        const leftValues = ["ç", "i", "ğ", "ö", "ş", "ü ", "ç ", "i", "ğ", "ö", "ş", "ü"];
        const rightValues = ["c", "ı", "g", "o", "s", "u", "ç", "i", "ğ", "ö", "ş", "ü"];

        for (let i = 0; i < leftValues.length; i++) {

            const leftValue = leftValues[i];
            const rightValue = rightValues[i];
            const turkishString = new TurkishString(leftValue);
            const sourceTurkishString = new TurkishString(leftValue);
            const destinationTurkishString = new TurkishString(rightValue);

            expect(turkishString.isGreaterThanOrEqual(rightValue)).to.equal(true);
            expect(turkishString.isGreaterThanOrEqual(destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(leftValue, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(leftValue, destinationTurkishString)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(sourceTurkishString, rightValue)).to.equal(true);
            expect(TurkishString.isGreaterThanOrEqual(sourceTurkishString, destinationTurkishString)).to.equal(true);
        }
    });
});
