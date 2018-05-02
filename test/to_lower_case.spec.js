const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("TurkishString.toLowerCase tests", function () {

    it("TurkishString.toLowerCase should throw error when source is invalid", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.toLowerCase(invalidParameters[i])}).to.throws(/resolve/);
        }
    });

    it("TurkishString.toLowerCase should transform only turkish special letters", function () {

        const input = "ÇĞIİÖŞÜCGOSUĆĠÏÕŚŮ";
        const expectedOutput = "çğıiöşücgosućġïõśů";
        const turkishString = new TurkishString(input);

        expect(turkishString.toLowerCase()).to.equal(expectedOutput);
        expect(TurkishString.toLowerCase(input)).to.equal(expectedOutput);
    });
});
