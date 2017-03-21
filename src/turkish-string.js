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

    var turkishAlphabetFix = {
        'ç': 099.5, 'Ç': 67.5,
        'ğ': 103.5, 'Ğ': 71.5,
        'ı': 104.5, 'İ': 74.5,
        'ş': 115.5, 'Ş': 83.5,
        'ö': 111.5, 'Ö': 79.5,
        'ü': 117.5, 'Ü': 85.5
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
        return (char === '' ? null : (turkishAlphabetFix[char] || char.charCodeAt(0)));
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
            var minLength = Math.max(source.length, destination.length);
            for (var i = 0; i < minLength; i++) {
                sourceIndex = getCharCode(source.charAt(i));
                destinationIndex = getCharCode(destination.charAt(i));
                if (sourceIndex === null) {
                    return destinationIndex === null ? 0 : -1;
                }
                else if (destinationIndex === null) {
                    return 1;
                }
                else if (sourceIndex !== destinationIndex) {
                    return (sourceIndex - destinationIndex < 0 ? -1 : 1);
                }
            }
            return 0;
        };

        return TurkishString;
    })();

}));