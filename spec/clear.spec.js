var expect = require('expect.js');
var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.clear tests', function () {

    it('TurkishString.clear should return empty string when parameter is not valid', function () {

        var invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined, ''];

        for (var i = 0; i < invalidParameters.length; i++) {

            var turkishString = new TurkishString(invalidParameters[i]);

            expect(turkishString.clear()).to.equal('');
            expect(TurkishString.clear(invalidParameters[i])).to.equal('');
        }
    });

    it('TurkishString.clear should transform only turkish special letters to english letters', function () {

        var input = 'çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ';
        var expectedOutput = 'cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ';

        var turkishString = new TurkishString(input);
        
        expect(turkishString.clear()).to.equal(expectedOutput);
        expect(TurkishString.clear(input)).to.equal(expectedOutput);
    });
});