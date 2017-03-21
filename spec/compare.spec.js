var TurkishString = require('../src/turkish-string.js');

describe('TurkishString.compare tests', function () {

    it('TurkishString.compare should throw error when one of the parameters is not a valid string', function () {

        var errorMessage = 'Arguments must be string object.';

        expect(function(){TurkishString.compare(null, '')}).toThrowError(errorMessage);
        expect(function(){TurkishString.compare('', {})}).toThrowError(errorMessage);
        expect(function(){TurkishString.compare('', '')}).not.toThrowError(errorMessage);
    });

    it('TurkishString.compare should return 0 when strings are equal', function () {

        var lowerTurkishLetters = 'cçgğıisşoöuü';
        var upperTurkishLetters = 'CÇGĞIİSŞOÖUÜ';

        expect(TurkishString.compare('', '')).toBe(0);
        expect(TurkishString.compare(' ', ' ')).toBe(0);
        expect(TurkishString.compare(lowerTurkishLetters, lowerTurkishLetters)).toBe(0);
        expect(TurkishString.compare(upperTurkishLetters, upperTurkishLetters)).toBe(0);

        expect(TurkishString.compare(lowerTurkishLetters, lowerTurkishLetters + ' ')).not.toBe(0);
        expect(TurkishString.compare(upperTurkishLetters + ' ', upperTurkishLetters)).not.toBe(0);
    });

    it('TurkishString.compare should return -1 when source is less than destination', function () {

        var lowerTurkishLetters = 'cçgğıisşoöuü';
        var upperTurkishLetters = 'CÇGĞIİSŞOÖUÜ';

        expect(TurkishString.compare('', ' ')).toBe(-1);
        expect(TurkishString.compare('c', 'ç')).toBe(-1);
        expect(TurkishString.compare('C', 'Ç')).toBe(-1);
        expect(TurkishString.compare('g', 'ğ')).toBe(-1);
        expect(TurkishString.compare('G', 'Ğ')).toBe(-1);
        expect(TurkishString.compare('ı', 'i')).toBe(-1);
        expect(TurkishString.compare('I', 'İ')).toBe(-1);
        expect(TurkishString.compare('s', 'ş')).toBe(-1);
        expect(TurkishString.compare('S', 'Ş')).toBe(-1);
        expect(TurkishString.compare('o', 'ö')).toBe(-1);
        expect(TurkishString.compare('O', 'Ö')).toBe(-1);
        expect(TurkishString.compare('u', 'ü')).toBe(-1);
        expect(TurkishString.compare('U', 'Ü')).toBe(-1);

        expect(TurkishString.compare(lowerTurkishLetters, lowerTurkishLetters + ' ')).toBe(-1);
        expect(TurkishString.compare(upperTurkishLetters, upperTurkishLetters + ' ')).toBe(-1);
    });

    it('TurkishString.compare should return 1 when source is greater than destination', function () {

        var lowerTurkishLetters = 'cçgğıisşoöuü';
        var upperTurkishLetters = 'CÇGĞIİSŞOÖUÜ';

        expect(TurkishString.compare(' ', '')).toBe(1);
        expect(TurkishString.compare('ç', 'c')).toBe(1);
        expect(TurkishString.compare('Ç', 'C')).toBe(1);
        expect(TurkishString.compare('ğ', 'g')).toBe(1);
        expect(TurkishString.compare('Ğ', 'G')).toBe(1);
        expect(TurkishString.compare('i', 'ı')).toBe(1);
        expect(TurkishString.compare('İ', 'I')).toBe(1);
        expect(TurkishString.compare('ş', 's')).toBe(1);
        expect(TurkishString.compare('Ş', 'S')).toBe(1);
        expect(TurkishString.compare('ö', 'o')).toBe(1);
        expect(TurkishString.compare('Ö', 'O')).toBe(1);
        expect(TurkishString.compare('ü', 'u')).toBe(1);
        expect(TurkishString.compare('Ü', 'U')).toBe(1);

        expect(TurkishString.compare(lowerTurkishLetters + ' ', lowerTurkishLetters)).toBe(1);
        expect(TurkishString.compare(upperTurkishLetters + ' ', upperTurkishLetters)).toBe(1);
    });

    it('TurkishString.greaterThan should return true if source is greater than destination', function () {

        expect(new TurkishString('ç').isGreaterThan('c')).toBe(true);
        expect(new TurkishString('ç').isGreaterThan('ç')).toBe(false);
        expect(TurkishString.isGreaterThan('ç', 'c')).toBe(true);
        expect(TurkishString.isGreaterThan('ç', 'ç')).toBe(false);
    });

    it('TurkishString.greaterThanOrEqual should return true if source is greater than or equal t0 destination', function () {

        expect(new TurkishString('ç').isGreaterThanOrEqual('c')).toBe(true);
        expect(new TurkishString('ç').isGreaterThanOrEqual('ç')).toBe(true);
        expect(TurkishString.isGreaterThanOrEqual('ç', 'c')).toBe(true);
        expect(TurkishString.isGreaterThanOrEqual('ç', 'ç')).toBe(true);
    });

    it('TurkishString.lessThan should return true if source is less than destination', function () {

        expect(new TurkishString('c').isLessThan('ç')).toBe(true);
        expect(new TurkishString('c').isLessThan('c')).toBe(false);
        expect(TurkishString.isLessThan('c', 'ç')).toBe(true);
        expect(TurkishString.isLessThan('c', 'c')).toBe(false);
    });

    it('TurkishString.lessThanOrEqual should return true if source is less than or equal t0 destination', function () {

        expect(new TurkishString('c').isLessThanOrEqual('ç')).toBe(true);
        expect(new TurkishString('c').isLessThanOrEqual('c')).toBe(true);
        expect(TurkishString.isLessThanOrEqual('c', 'ç')).toBe(true);
        expect(TurkishString.isLessThanOrEqual('c', 'c')).toBe(true);
    });
});