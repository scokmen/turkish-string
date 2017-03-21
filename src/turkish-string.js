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

    var TURKISH_ALPHABET_FIX = {
        'ç': 099.5, 'Ç': 67.5,
        'ğ': 103.5, 'Ğ': 71.5,
        'ı': 104.5, 'İ': 74.5,
        'ş': 115.5, 'Ş': 83.5,
        'ö': 111.5, 'Ö': 79.5,
        'ü': 117.5, 'Ü': 85.5
    };

    var COMPARISON_RESULT = {
        LESS_THAN : -1,
        EQUAL : 0,
        GREATER_THAN : 1
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
     * Get ascii code of given char.
     * @param {string} char
     * @returns {number}
     */
    function getCharCode(char) {
        return (char === '' ? null : (TURKISH_ALPHABET_FIX[char] || char.charCodeAt(0)));
    }

    return (function () {

        function TurkishString(source) {
            if (!isString(source)) {
                throw new Error('TurkishString object must be initialized with string object.');
            }
            this.source = source;
        }

        /**
         * Convert given string to lower-case version by the turkish rules.
         * @param {string} str
         * @returns {string}
         */
        TurkishString.toLowerCase = function (str) {
            if (isString(str)) {
                var letters = {'İ': 'i', 'I': 'ı', 'Ş': 'ş', 'Ğ': 'ğ', 'Ü': 'ü', 'Ö': 'ö', 'Ç': 'ç'};
                var turkishString = str.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
                    return letters[letter];
                });
                return turkishString.toLowerCase();
            }
            return '';
        };

        /**
         * Convert source to lower-case version by the turkish rules.
         * @returns {string}
         */
        TurkishString.prototype.toLowerCase = function () {
            return TurkishString.toLowerCase(this.source);
        };

        /**
         * Convert given string to upper-case version by the turkish rules.
         * @param {string} str
         * @returns {string}
         */
        TurkishString.toUpperCase = function (str) {
            if (isString(str)) {
                var letters = {'i': 'İ', 'ş': 'Ş', 'ğ': 'Ğ', 'ü': 'Ü', 'ö': 'Ö', 'ç': 'Ç', 'ı': 'I'};
                var turkishString = str.replace(/(([iışğüçö]))/g, function (letter) {
                    return letters[letter];
                });
                return turkishString.toUpperCase();
            }
            return '';
        };

        /**
         * Convert source to upper-case version by the turkish rules.
         * @returns {string}
         */
        TurkishString.prototype.toUpperCase = function () {
            return TurkishString.toUpperCase(this.source);
        };

        /**
         * Compare the given strings
         * @param {string} source
         * @param {string} destination
         * @returns {number} standard js compare result -1, 0, 1
         */
        TurkishString.compare = function (source, destination) {
            if (!isString(source) || !isString(destination)) {
                throw new Error('Arguments must be string object.');
            }
            var sourceIndex;
            var destinationIndex;
            var maxLength = Math.max(source.length, destination.length);
            for (var i = 0; i < maxLength; i++) {
                sourceIndex = getCharCode(source.charAt(i));
                destinationIndex = getCharCode(destination.charAt(i));
                if (sourceIndex === null) {
                    return destinationIndex === null ? COMPARISON_RESULT.EQUAL : COMPARISON_RESULT.LESS_THAN;
                }
                else if (destinationIndex === null) {
                    return COMPARISON_RESULT.GREATER_THAN;
                }
                else if (sourceIndex !== destinationIndex) {
                    return (sourceIndex - destinationIndex < 0 ? COMPARISON_RESULT.LESS_THAN : COMPARISON_RESULT.GREATER_THAN);
                }
            }
            return COMPARISON_RESULT.EQUAL;
        };

        /**
         * Is source parameter greater than destination parameter?
         * @param {string} source
         * @param {string} destination
         * @returns {boolean}
         */
        TurkishString.isGreaterThan = function (source, destination) {
            return TurkishString.compare(source, destination) === COMPARISON_RESULT.GREATER_THAN;
        };

        /**
         * Is TurkishString instance greater than target parameter?
         * @param {string} target
         * @returns {boolean}
         */
        TurkishString.prototype.isGreaterThan = function (target) {
            return TurkishString.isGreaterThan(this.source, target);
        };

        /**
        * Is source parameter greater than or equal to destination parameter?
        * @param {string} source
        * @param {string} destination
        * @returns {boolean}
        */
        TurkishString.isGreaterThanOrEqual = function (source, destination) {
            var result = TurkishString.compare(source, destination);
            return result === COMPARISON_RESULT.EQUAL || result === COMPARISON_RESULT.GREATER_THAN;
        };

        /**
         * Is TurkishString instance greater than or equal to target parameter?
         * @param {string} target
         * @returns {boolean}
         */
        TurkishString.prototype.isGreaterThanOrEqual = function (target) {
            return TurkishString.isGreaterThanOrEqual(this.source, target);
        };

        /**
         * Is source parameter less than destination parameter?
         * @param {string} source
         * @param {string} destination
         * @returns {boolean}
         */
        TurkishString.isLessThan = function (source, destination) {
            return TurkishString.compare(source, destination) === COMPARISON_RESULT.LESS_THAN;
        };

        /**
         * Is TurkishString instance less than target parameter?
         * @param {string} target
         * @returns {boolean}
         */
        TurkishString.prototype.isLessThan = function (target) {
            return TurkishString.isLessThan(this.source, target);
        };

        /**
         * Is source parameter less than or equal to destination parameter?
         * @param {string} source
         * @param {string} destination
         * @returns {boolean}
         */
        TurkishString.isLessThanOrEqual = function (source, destination) {
            var result = TurkishString.compare(source, destination);
            return result === COMPARISON_RESULT.LESS_THAN || result === COMPARISON_RESULT.EQUAL;
        };

        /**
         * Is TurkishString instance less than or equal to target parameter?
         * @param {string} target
         * @returns {boolean}
         */
        TurkishString.prototype.isLessThanOrEqual = function (target) {
            return TurkishString.isLessThanOrEqual(this.source, target);
        };

        return TurkishString;
    })();

}));