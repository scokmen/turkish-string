const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("comparison utility specs", function () {

    const COMPARISON_RESULT = { LESS_THAN: -1, EQUAL: 0, GREATER_THAN: 1 };

    it("should throws type error when one of the arguments of the compare method is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            const invalidParameter = invalidParameters[i];

            expect(function() { TurkishString.compare(invalidParameter, ""); }).to.throw(TypeError);
            expect(function() { TurkishString.compare(invalidParameter, new TurkishString("")); }).to.throw(TypeError);
            expect(function() { TurkishString.compare("", invalidParameter); }).to.throw(TypeError);
            expect(function() { TurkishString.compare(new TurkishString(""), invalidParameter); }).to.throw(TypeError);
        }
    });

    it("should returns zero when arguments of compare method are identical", function () {

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

    it("should returns -1 when first parameter of the compare method is less than the other", function () {

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

    it("should returns true when first parameter of the isLessThan method is less than other", function () {

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

    it("should returns true when first parameter of the isLessThanOrEqual method is less than or equal to other", function () {

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

    it("should returns 1 when first parameter of the compare method is greater than second parameter", function () {

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

    it("should returns 1 when first parameter of the isGreaterThan method is greater than other", function () {

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

    it("should returns 1 when first parameter of the isGreaterThanOrEqual method is greater than or equal to other", function () {

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
