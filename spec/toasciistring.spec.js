var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toAsciiString tests', function () {

    it('TurkishString.toAsciiString should transform turkish letters to ascii-128 table', function () {

        var input = 'cçgğıisşoöuü-CÇGĞIİSŞOÖUÜ';
        var expectedOutput = 'ccggiissoouu-CCGGIISSOOUU';
        var turkishString = new TurkishString(input);

        expect(turkishString.toAsciiString()).toBe(expectedOutput);
        expect(TurkishString.toAsciiString(input)).toBe(expectedOutput);
    });
});