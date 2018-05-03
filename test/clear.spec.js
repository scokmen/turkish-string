const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("clear utility specs", function () {

    it("should throws type error when argument of the clear method is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function() { TurkishString.clear(invalidParameters[i]); }).to.throw(TypeError);
        }
    });

    it("should clears only turkish special characters", function () {

        const input = "çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ";
        const turkishString = new TurkishString(input);
        const expectedOutput = "cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ";

        expect(turkishString.clear()).to.equal(expectedOutput);
        expect(TurkishString.clear(input)).to.equal(expectedOutput);
    });
});
