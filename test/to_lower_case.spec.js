const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("to lower case utility specs", function () {

    it("should throws type error when argument of toLowerCase is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.toLowerCase(invalidParameters[i])}).to.throws(TypeError);
        }
    });

    it("should converts only turkish characters", function () {

        const input = "ÇĞIİÖŞÜCGOSUĆĠÏÕŚŮ";
        const expectedOutput = "çğıiöşücgosućġïõśů";
        const turkishString = new TurkishString(input);

        expect(turkishString.toLowerCase()).to.equal(expectedOutput);
        expect(TurkishString.toLowerCase(input)).to.equal(expectedOutput);
    });
});
