const faker = require("faker");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("TurkishString.constructor tests", function () {

    it("TurkishString.constructor should throw error when source is invalid", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){new TurkishString(invalidParameters[i])}).to.throws(/resolve/);
        }
    });

    it("After TurkishString.constructor initialization, toString must return the same value", function () {

        const word = faker.random.word();
        const turkishString = new TurkishString(word);

        expect(turkishString.toString()).to.equal(word);

        expect(new TurkishString(turkishString).toString()).to.equal(word);
    });

    it("TurkishString.constructor should throw error when source is invalid", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.create(invalidParameters[i])}).to.throws(/resolve/);
        }
    });

    it("After TurkishString.create initialization, toString must return the same value", function () {

        const word = faker.random.word();
        const turkishString = new TurkishString(word);

        expect(turkishString.toString()).to.equal(word);

        expect(TurkishString.create(turkishString).toString()).to.equal(word);
    });

    it("TurkishString.clone should clone instance", function () {

        const word = faker.random.word();
        const turkishString = new TurkishString(word);
        const turkishCloneString = turkishString.clone();

        expect(turkishString.toString()).to.equal(turkishCloneString.toString());
    });
});
