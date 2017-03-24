var expect = require('expect.js');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.toLowerCase tests', function () {

    it('TurkishString.toLowerCase should return empty string when parameter is not valid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined, ''];

        for (var i = 0; i < invalidParameters.length; i++) {

            var turkishString = new TurkishString(invalidParameters[i]);

            expect(turkishString.toLowerCase()).to.equal('');
            expect(TurkishString.toLowerCase(invalidParameters[i])).to.equal('');
        }
    });

    it('TurkishString.toLowerCase should transform only turkish special letters', function () {

        var upperCaseTurkishSpecialLetters = 'ÇĞIİÖŞÜ';
        var lowerCaseTurkishSpecialLetters = 'çğıiöşü';

        var input = upperCaseTurkishSpecialLetters + 'CGOSU' + 'ĆĠÏÕŚŮ';
        var expectedOutput = lowerCaseTurkishSpecialLetters + 'cgosu' + 'ćġïõśů';

        var turkishString = new TurkishString(input);
        
        expect(turkishString.toLowerCase()).to.equal(expectedOutput);
        expect(TurkishString.toLowerCase(input)).to.equal(expectedOutput);
    });
});