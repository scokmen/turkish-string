var faker = require('faker');
var describe = require('gulp-jasmine');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.constructor tests', function () {

    it('After TurkishString.constructor initialization, toString must return the same value', function () {

        var word = faker.random.word();
        
        var turkishString = new TurkishString(word);
        
        expect(turkishString.toString()).toBe(word);

        expect(new TurkishString(turkishString).toString()).toBe(word);
    });
    
    it('After TurkishString.constructor initialization, toString must return empty when parameter is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined, ''];

        for (var i = 0; i < invalidParameters.length; i++) {

            var turkishString = new TurkishString(invalidParameters[i]);

            expect(turkishString.toString()).toBe('');
        }
    });

    it('After TurkishString.create initialization, toString must return the same value', function () {

        var word = faker.random.word();

        var turkishString = new TurkishString(word);

        expect(turkishString.toString()).toBe(word);

        expect(TurkishString.create(turkishString).toString()).toBe(word);
    });

    it('After TurkishString.create initialization, toString must return empty when parameter is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined, ''];

        for (var i = 0; i < invalidParameters.length; i++) {

            var turkishString = TurkishString.create(invalidParameters[i]);

            expect(turkishString.toString()).toBe('');
        }
    });
});