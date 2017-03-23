var faker = require('faker');
var expect = require('expect.js');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.constructor tests', function () {

    it('After TurkishString.constructor initialization, toString must return the same value', function () {

        var word = faker.random.word();
        
        var turkishString = new TurkishString(word);
        
        expect(turkishString.toString()).to.equal(word);

        expect(new TurkishString(turkishString).toString()).to.equal(word);
    });
    
    it('After TurkishString.constructor initialization, toString must return empty when parameter is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined, ''];

        for (var i = 0; i < invalidParameters.length; i++) {

            var turkishString = new TurkishString(invalidParameters[i]);

            expect(turkishString.toString()).to.equal('');
        }
    });

    it('After TurkishString.create initialization, toString must return the same value', function () {

        var word = faker.random.word();

        var turkishString = new TurkishString(word);

        expect(turkishString.toString()).to.equal(word);

        expect(TurkishString.create(turkishString).toString()).to.equal(word);
    });

    it('After TurkishString.create initialization, toString must return empty when parameter is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined, ''];

        for (var i = 0; i < invalidParameters.length; i++) {

            var turkishString = TurkishString.create(invalidParameters[i]);

            expect(turkishString.toString()).to.equal('');
        }
    });
});