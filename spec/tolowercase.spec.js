var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toLowerCase tests', function () {

    it('TurkishString.toLowerCase should throw error when source is invalid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (var i = 0; i < invalidParameters.length; i++) {

            expect(function(){TurkishString.toLowerCase(invalidParameters[i])}).toThrowError(/resolve/);
        }
    });

    it('TurkishString.toLowerCase should transform only turkish special letters', function () {

        var input = 'ÇĞIİÖŞÜCGOSUĆĠÏÕŚŮ';
        var expectedOutput = 'çğıiöşücgosućġïõśů';

        var turkishString = new TurkishString(input);
        
        expect(turkishString.toLowerCase()).toBe(expectedOutput);
        expect(TurkishString.toLowerCase(input)).toBe(expectedOutput);
    });
});