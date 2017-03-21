var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toLowerCase tests', function () {

    it('TurkishString.toLowerCase should transform turkish letters', function () {

        var input = 'CÇGĞIİSŞOÖUÜ';
        var expectedOutput = 'cçgğıisşoöuü';
        var turkishString = new TurkishString(input);

        expect(turkishString.toLowerCase()).toBe(expectedOutput);
        expect(TurkishString.toLowerCase(input)).toBe(expectedOutput);
    });
});