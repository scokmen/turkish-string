var faker = require('faker');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.constructor tests', function () {

    it('TurkishString.constructor should throw error when source is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (var i = 0; i < invalidParameters.length; i++) {

            expect(function(){new TurkishString(invalidParameters[i])}).toThrowError(/resolve/);
        }
    });

    it('After TurkishString.constructor initialization, toString must return the same value', function () {

        var word = faker.random.word();
        
        var turkishString = new TurkishString(word);
        
        expect(turkishString.toString()).toBe(word);

        expect(new TurkishString(turkishString).toString()).toBe(word);
    });

    it('TurkishString.constructor should throw error when source is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (var i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.create(invalidParameters[i])}).toThrowError(/resolve/);
        }
    });

    it('After TurkishString.create initialization, toString must return the same value', function () {

        var word = faker.random.word();

        var turkishString = new TurkishString(word);

        expect(turkishString.toString()).toBe(word);

        expect(TurkishString.create(turkishString).toString()).toBe(word);
    });

    it('TurkishString.clone should clone instance', function () {

        var word = faker.random.word();

        var turkishString = new TurkishString(word);
        var turkishCloneString = turkishString.clone();

        expect(turkishString.toString()).toBe(turkishCloneString.toString());
    });

});