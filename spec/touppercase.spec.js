var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toUpperCase tests', function () {

    it('TurkishString.toUpperCase should throw error when source is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (var i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.toUpperCase(invalidParameters[i])}).toThrowError(/resolve/);
        }
    });

    it('TurkishString.toUpperCase should transform only turkish special letters', function () {

        var input = 'çğıiöşücgosućġïõśů';
        var expectedOutput = 'ÇĞIİÖŞÜCGOSUĆĠÏÕŚŮ';

        var turkishString = new TurkishString(input);
        
        expect(turkishString.toUpperCase()).toBe(expectedOutput);
        expect(TurkishString.toUpperCase(input)).toBe(expectedOutput);
    });
});