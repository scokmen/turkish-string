var expect = require('expect.js');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toUpperCase tests', function () {

    it('TurkishString.toUpperCase should return empty string when parameter is not valid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined, ''];

        for (var i = 0; i < invalidParameters.length; i++) {

            var turkishString = new TurkishString(invalidParameters[i]);

            expect(turkishString.toUpperCase()).to.equal('');
            expect(TurkishString.toUpperCase(invalidParameters[i])).to.equal('');
        }
    });

    it('TurkishString.toUpperCase should transform only turkish special letters', function () {

        var input = 'çğıiöşücgosućġïõśů';
        var expectedOutput = 'ÇĞIİÖŞÜCGOSUĆĠÏÕŚŮ';

        var turkishString = new TurkishString(input);
        
        expect(turkishString.toUpperCase()).to.equal(expectedOutput);
        expect(TurkishString.toUpperCase(input)).to.equal(expectedOutput);
    });
});