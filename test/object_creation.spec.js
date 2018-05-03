const faker = require("faker");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("constructor and creation utility specs", function () {

    it("should throws type error when argument of constructor is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){new TurkishString(invalidParameters[i])}).to.throws(TypeError);
        }
    });

    it("should throws type error when argument of create is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.create(invalidParameters[i])}).to.throws(TypeError);
        }
    });

    it("should clones underlying string", function () {

        const word = faker.random.word();
        const turkishString = new TurkishString(word);
        const turkishCloneString = turkishString.clone();

        expect(turkishString.toString()).to.equal(turkishCloneString.toString());
    });
});
