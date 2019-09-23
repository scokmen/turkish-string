const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("to title case utility specs", function () {

    it("should throws type error when argument of toTitleCase is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.toTitleCase(invalidParameters[i])}).to.throws(TypeError);
        }
    });

    it("should converts only turkish characters", function () {

        const input = "ça ğa ıa ia öa şa üa ca ga oa sa ua ća ġa ïa õa śa ůa";
        const expectedOutput = "Ça Ğa Ia İa Öa Şa Üa Ca Ga Oa Sa Ua Ća Ġa Ïa Õa Śa Ůa";
        const turkishString = new TurkishString(input);

        expect(turkishString.toTitleCase()).to.equals(expectedOutput);
        expect(TurkishString.toTitleCase(input)).to.equals(expectedOutput);
    });
});
