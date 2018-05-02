const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("TurkishString.toUpperCase tests", function () {

    it("TurkishString.toUpperCase should throw error when source is invalid", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.toUpperCase(invalidParameters[i])}).to.throws(/resolve/);
        }
    });

    it("TurkishString.toUpperCase should transform only turkish special letters", function () {

        const input = "çğıiöşücgosućġïõśů";
        const expectedOutput = "ÇĞIİÖŞÜCGOSUĆĠÏÕŚŮ";
        const turkishString = new TurkishString(input);

        expect(turkishString.toUpperCase()).to.equals(expectedOutput);
        expect(TurkishString.toUpperCase(input)).to.equals(expectedOutput);
    });
});
