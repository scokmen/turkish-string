(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.TurkishString = factory();
    }

}(this, function () {
    'use strict';

    /**
     * Turkish special letters to ascii mapping table.
     */
    var TURKISH_SPECIAL_LETTERS_TO_ASCII_MAPPING_TABLE = {
        'ç': 'c', 'ı': 'i', 'ğ': 'g', 'ş': 's', 'ö': 'o', 'ü': 'u',
        'Ç': 'C', 'İ': 'I', 'Ğ': 'G', 'Ş': 'S', 'Ö': 'O', 'Ü': 'U'
    };

    /**
     * Turkish special letters virtual ascii codes.
     */
    var TURKISH_SPECIAL_LETTERS_VIRTUAL_ASCII_CODES = {
        'ç': 099.5, 'Ç': 67.5, 'ğ': 103.5, 'Ğ': 71.5, 'ı': 104.5, 'İ': 74.5,
        'ş': 115.5, 'Ş': 83.5, 'ö': 111.5, 'Ö': 79.5, 'ü': 117.5, 'Ü': 85.5
    };

    /**
     * Turkish special letters to lower and to upper mapping table.
     */
    var TURKISH_SPECIAL_LETTERS_TOLOWER_TOUPPER_MAPPING_TABLE = {
        'İ': 'i', 'I': 'ı', 'Ş': 'ş', 'Ğ': 'ğ', 'Ü': 'ü', 'Ö': 'ö', 'Ç': 'ç',
        'i': 'İ', 'ş': 'Ş', 'ğ': 'Ğ', 'ü': 'Ü', 'ö': 'Ö', 'ç': 'Ç', 'ı': 'I'
    };

    var TURKISH_TO_LOWER_CASE_REGEX = /[\u00C7\u011E\u0049\u0130\u00D6\u015E\u00DC]/g;
    var TURKISH_TO_UPPER_CASE_REGEX = /[\u00E7\u011F\u0131\u0069\u00F6\u015F\u00FC]/g;
    var TURKISH_TO_ASCII_REGEX = /[\u00E7\u011F\u0131\u00F6\u015F\u00FC\u00C7\u011E\u0130\u00D6\u015E\u00DC]/g;

    var COMPARISON_RESULT = {
        LESS_THAN: -1, EQUAL: 0, GREATER_THAN: 1
    };

    /**
     * Is parameter a valid string?
     * @param  {string} str
     * @return {boolean}
     */
    function isString(str) {
        return str !== null && typeof str === 'string';
    }

    /**
     * Get ascii code for given letter.
     * @param {string} letter
     * @returns {number}
     */
    function getCharCode(letter) {
        return (letter === '' ? null : (TURKISH_SPECIAL_LETTERS_VIRTUAL_ASCII_CODES[letter] || letter.charCodeAt(0)));
    }

    /**
     * Transform turkish special letters to lower or to upper
     * by using TURKISH_SPECIAL_LETTERS_TOLOWER_TOUPPER_MAPPING_TABLE
     * mapping table.
     * @param {string} letter
     * @returns {string}
     */
    function transformTurkishSpecialLettersToLowerOrToUpper(letter) {
        return TURKISH_SPECIAL_LETTERS_TOLOWER_TOUPPER_MAPPING_TABLE[letter];
    }

    /**
     * Transform turkish special letters to ascii
     * by using TURKISH_SPECIAL_LETTERS_TO_ASCII_MAPPING_TABLE
     * mapping table.
     * @param {string} letter
     * @returns {string}
     */
    function transformTurkishSpecialLettersToAscii(letter) {
        return TURKISH_SPECIAL_LETTERS_TO_ASCII_MAPPING_TABLE[letter];
    }

    return (function () {

        /**
         * Create a TurkishString instance.
         * @param {string, TurkishString} source
         * @constructor
         */
        function TurkishString(source) {
            this.source = TurkishString.resolve(source);
        }

        /**
         * Create a TurkishString instance.
         * @param {string, TurkishString} source
         * @return {TurkishString}
         */
        TurkishString.create = function (source) {
            return new TurkishString(source);
        };

        /**
         * Check if parameter is a non-null TurkishString instance.
         * @param {TurkishString} turkishString
         * @return {boolean}
         */
        TurkishString.isInstance = function (turkishString) {
            return !!turkishString && turkishString instanceof TurkishString;
        };

        /**
         * Resolve string from parameter.
         * If parameter is not string or TurkishString instance, throws and error.
         * @param {string, TurkishString} source
         * @return {string}
         */
        TurkishString.resolve = function (source) {
            return isString(source) ? source : (TurkishString.isInstance(source) ? source.toString() : '');
        };

        /**
         * Get string object.
         * @returns {string}
         */
        TurkishString.prototype.toString = function () {
            return String(this.source).toString();
        };

        /**
         * Turkish lowercase.
         * @param {string, TurkishString} source
         * @returns {string}
         */
        TurkishString.toLowerCase = function (source) {
            return TurkishString.resolve(source)
                .replace(TURKISH_TO_LOWER_CASE_REGEX, transformTurkishSpecialLettersToLowerOrToUpper)
                .toLowerCase();
        };

        /**
         * Turkish lowercase.
         * @returns {string}
         */
        TurkishString.prototype.toLowerCase = function () {
            return TurkishString.toLowerCase(this.source);
        };

        /**
         * Turkish uppercase.
         * @param {string, TurkishString} source
         * @returns {string}
         */
        TurkishString.toUpperCase = function (source) {
            return TurkishString.resolve(source)
                .replace(TURKISH_TO_UPPER_CASE_REGEX, transformTurkishSpecialLettersToLowerOrToUpper)
                .toUpperCase();
        };

        /**
         * Turkish uppercase.
         * @returns {string}
         */
        TurkishString.prototype.toUpperCase = function () {
            return TurkishString.toUpperCase(this.source);
        };

        /**
         * Transform turkish letters to ascii letters.
         * @param {string, TurkishString} source
         * @returns {string}
         */
        TurkishString.toAscii = function (source) {
            return TurkishString.resolve(source)
                .replace(TURKISH_TO_ASCII_REGEX, transformTurkishSpecialLettersToAscii);
        };

        /**
         * Transform turkish letters to ascii letters.
         * @returns {string}
         */
        TurkishString.prototype.toAscii = function () {
            return TurkishString.toAscii(this.source);
        };

        /**
         * Compare the given strings or TurkishString instances.
         * @param {string, TurkishString} source
         * @param {string, TurkishString} destination
         * @returns {number} standard js comparison result: -1, 0, 1
         */
        TurkishString.compare = function (source, destination) {
            var sourceCharCode;
            var destinationCharCode;
            var sourceStr = TurkishString.resolve(source);
            var destinationStr = TurkishString.resolve(destination);
            var maxLength = Math.max(sourceStr.length, destinationStr.length);
            for (var i = 0; i < maxLength; i++) {
                sourceCharCode = getCharCode(sourceStr.charAt(i));
                destinationCharCode = getCharCode(destinationStr.charAt(i));
                if (sourceCharCode === null) {
                    return destinationCharCode === null ? COMPARISON_RESULT.EQUAL : COMPARISON_RESULT.LESS_THAN;
                }
                else if (destinationCharCode === null) {
                    return COMPARISON_RESULT.GREATER_THAN;
                }
                else if (sourceCharCode !== destinationCharCode) {
                    return (sourceCharCode - destinationCharCode < 0 ? COMPARISON_RESULT.LESS_THAN : COMPARISON_RESULT.GREATER_THAN);
                }
            }
            return COMPARISON_RESULT.EQUAL;
        };

        /**
         * Is source greater than destination?
         * @param {string, TurkishString} source
         * @param {string, TurkishString} destination
         * @returns {boolean}
         */
        TurkishString.isGreaterThan = function (source, destination) {
            return TurkishString.compare(source, destination) === COMPARISON_RESULT.GREATER_THAN;
        };

        /**
         * Is TurkishString instance greater than target?
         * @param {string, TurkishString} target
         * @returns {boolean}
         */
        TurkishString.prototype.isGreaterThan = function (target) {
            return TurkishString.isGreaterThan(this.source, target);
        };

        /**
         * Is source greater than or equal to destination?
         * @param {string, TurkishString} source
         * @param {string, TurkishString} destination
         * @returns {boolean}
         */
        TurkishString.isGreaterThanOrEqual = function (source, destination) {
            var result = TurkishString.compare(source, destination);
            return result === COMPARISON_RESULT.EQUAL || result === COMPARISON_RESULT.GREATER_THAN;
        };

        /**
         * Is TurkishString instance greater than or equal to target?
         * @param {string, TurkishString} target
         * @returns {boolean}
         */
        TurkishString.prototype.isGreaterThanOrEqual = function (target) {
            return TurkishString.isGreaterThanOrEqual(this.source, target);
        };

        /**
         * Is source less than destination?
         * @param {string, TurkishString} source
         * @param {string, TurkishString} destination
         * @returns {boolean}
         */
        TurkishString.isLessThan = function (source, destination) {
            return TurkishString.compare(source, destination) === COMPARISON_RESULT.LESS_THAN;
        };

        /**
         * Is TurkishString instance less than target?
         * @param {string, TurkishString} target
         * @returns {boolean}
         */
        TurkishString.prototype.isLessThan = function (target) {
            return TurkishString.isLessThan(this.source, target);
        };

        /**
         * Is source less than or equal to destination?
         * @param {string, TurkishString} source
         * @param {string, TurkishString} destination
         * @returns {boolean}
         */
        TurkishString.isLessThanOrEqual = function (source, destination) {
            var result = TurkishString.compare(source, destination);
            return result === COMPARISON_RESULT.LESS_THAN || result === COMPARISON_RESULT.EQUAL;
        };

        /**
         * Is TurkishString instance less than or equal to target?
         * @param {string, TurkishString} target
         * @returns {boolean}
         */
        TurkishString.prototype.isLessThanOrEqual = function (target) {
            return TurkishString.isLessThanOrEqual(this.source, target);
        };

        return TurkishString;
    })();

}));