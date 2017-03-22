var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toAscii tests', function () {

    it('TurkishString.toAscii should transform turkish letters to ascii-128 table', function () {

        var input = 'cçgğıisşoöuü-CÇGĞIİSŞOÖUÜ';
        var expectedOutput = 'ccggiissoouu-CCGGIISSOOUU';
        var turkishString = new TurkishString(input);

        expect(turkishString.toAscii()).toBe(expectedOutput);
        expect(TurkishString.toAscii(input)).toBe(expectedOutput);
    });
});