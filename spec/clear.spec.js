var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.clear tests', function () {

    it('TurkishString.clear should throw error when source is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (var i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.clear(invalidParameters[i])}).toThrowError(/resolve/);
        }
    });

    it('TurkishString.clear should transform only turkish special letters to english letters', function () {

        var input = 'çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ';
        var expectedOutput = 'cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ';

        var turkishString = new TurkishString(input);
        
        expect(turkishString.clear()).toBe(expectedOutput);
        expect(TurkishString.clear(input)).toBe(expectedOutput);
    });
});