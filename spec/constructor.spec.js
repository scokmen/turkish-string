var faker = require('faker');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.constructor tests', function () {

    it('constructor should throw error when parameter is not a valid string', function () {

        var errorMessage = 'TurkishString object must be initialized with string object.';

        var objectParam = {};
        var numberParam = faker.random.number();
        var arrayParam = [];
        var booleanParam = faker.random.boolean();
        var nonEmptyStringParam = faker.random.word();
        var nullParam = null;
        var undefinedParam = undefined;
        var emptyStringParam = '';

        expect(function () {
            new TurkishString(objectParam)
        }).toThrowError(errorMessage);
        expect(function () {
            new TurkishString(numberParam)
        }).toThrowError(errorMessage);
        expect(function () {
            new TurkishString(arrayParam)
        }).toThrowError(errorMessage);
        expect(function () {
            new TurkishString(booleanParam)
        }).toThrowError(errorMessage);
        expect(function () {
            new TurkishString(nullParam)
        }).toThrowError(errorMessage);
        expect(function () {
            new TurkishString(undefinedParam)
        }).toThrowError(errorMessage);
        expect(function () {
            new TurkishString(emptyStringParam)
        }).not.toThrowError(errorMessage);
        expect(function () {
            new TurkishString(nonEmptyStringParam)
        }).not.toThrowError(errorMessage);
    });
});