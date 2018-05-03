const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("to upper case utility specs", function () {

    it("should throws type error when argument of toUpperCase is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.toUpperCase(invalidParameters[i])}).to.throws(TypeError);
        }
    });

    it("should converts only turkish characters", function () {

        const input = "çğıiöşücgosućġïõśů";
        const expectedOutput = "ÇĞIİÖŞÜCGOSUĆĠÏÕŚŮ";
        const turkishString = new TurkishString(input);

        expect(turkishString.toUpperCase()).to.equals(expectedOutput);
        expect(TurkishString.toUpperCase(input)).to.equals(expectedOutput);
    });
});
