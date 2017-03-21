var faker = require('faker');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toUpperCase tests', function () {

    it('TurkishString.toUpperCase should transform turkish letters', function () {

        var input = 'cçgğıisşoöuü';
        var expectedOutput = 'CÇGĞIİSŞOÖUÜ';
        var turkishString = new TurkishString(input);

        expect(turkishString.toUpperCase()).toBe(expectedOutput);
        expect(TurkishString.toUpperCase(input)).toBe(expectedOutput);
    });
});