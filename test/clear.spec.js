const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("TurkishString.clear tests", function () {

    it("TurkishString.clear should throw error when source is invalid", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.clear(invalidParameters[i])}).to.throw(/resolve/);
        }
    });

    it("TurkishString.clear should transform only turkish special letters to english letters", function () {

        const input = "çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ";
        const expectedOutput = "cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ";
        const turkishString = new TurkishString(input);

        expect(turkishString.clear()).to.equal(expectedOutput);
        expect(TurkishString.clear(input)).to.equal(expectedOutput);
    });
});
