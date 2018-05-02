/**
 * Turkish special letters to english letters mapping table.
 */
const TURKISH_TO_ENGLISH_TRANSFORM_MAP = {
    "ç": "c", "ı": "i", "ğ": "g", "ş": "s", "ö": "o", "ü": "u",
    "Ç": "C", "İ": "I", "Ğ": "G", "Ş": "S", "Ö": "O", "Ü": "U"
};

/**
 * Turkish special letters virtual ascii codes.
 */
const VIRTUAL_ASCII_CODES = {
    "ç": 99.5, "Ç": 67.5, "ğ": 103.5, "Ğ": 71.5, "ı": 104.5, "İ": 74.5,
    "ş": 115.5, "Ş": 83.5, "ö": 111.5, "Ö": 79.5, "ü": 117.5, "Ü": 85.5
};

/**
 * Turkish special letters to lower and to upper mapping table.
 */
const LETTER_TRANSFORM_MAP = {
    "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç",
    "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I"
};

const LOWER_CASE_REGEX = /[\u00C7\u011E\u0049\u0130\u00D6\u015E\u00DC]/g;
const UPPER_CASE_REGEX = /[\u00E7\u011F\u0131\u0069\u00F6\u015F\u00FC]/g;
const CLEAR_LETTER_REGEX = /[\u00E7\u011F\u0131\u00F6\u015F\u00FC\u00C7\u011E\u0130\u00D6\u015E\u00DC]/g;
const COMPARISON_RESULT = {LESS_THAN: -1, EQUAL: 0, GREATER_THAN: 1};

/**
 * Is parameter a valid string?
 * @param  {string} str
 * @return {boolean}
 */
function isString(str) {
    return str !== null && typeof str === "string";
}

/**
 * Get ascii code for given letter.
 * @param {string} letter
 * @returns {number}
 */
function getCharCode(letter) {
    return (letter === '' ? null : (VIRTUAL_ASCII_CODES[letter] || letter.charCodeAt(0)));
}

/**
 * Transform turkish special letters to lower or to upper
 * by using LETTER_TRANSFORM_MAP
 * mapping table.
 * @param {string} letter
 * @returns {string}
 */
function transformLetter(letter) {
    return LETTER_TRANSFORM_MAP[letter];
}

/**
 * Transform turkish special letters to english
 * letters by using TURKISH_TO_ENGLISH_TRANSFORM_MAP
 * mapping table.
 * @param {string} letter
 * @returns {string}
 */
function clearLetter(letter) {
    return TURKISH_TO_ENGLISH_TRANSFORM_MAP[letter];
}

/**
 * Create a TurkishString instance.
 * @param {string, TurkishString} source
 * @constructor
 * @throws {Error}
 */
function TurkishString(source) {
    this.source = TurkishString.resolve(source);
}

/**
 * Create a TurkishString instance.
 * @param {string, TurkishString} source
 * @return {TurkishString}
 * @throws {Error}
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
 * @throws {Error}
 */
TurkishString.resolve = function (source) {
    if (isString(source)) {
        return source;
    }
    else if (TurkishString.isInstance(source)) {
        return source.toString();
    }
    else {
        throw new Error("Cannot resolve parameter");
    }
};

/**
 * Clone the instance.
 * @return {TurkishString}
 * @throws {Error}
 */
TurkishString.prototype.clone = function () {
    return new TurkishString(this.source);
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
 * @throws {Error}
 */
TurkishString.toLowerCase = function (source) {
    return TurkishString.resolve(source).replace(LOWER_CASE_REGEX, transformLetter).toLowerCase();
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
 * @throws {Error}
 */
TurkishString.toUpperCase = function (source) {
    return TurkishString.resolve(source).replace(UPPER_CASE_REGEX, transformLetter).toUpperCase();
};

/**
 * Turkish uppercase.
 * @returns {string}
 */
TurkishString.prototype.toUpperCase = function () {
    return TurkishString.toUpperCase(this.source);
};

/**
 * Transform turkish special letters to english letters.
 * @param {string, TurkishString} source
 * @returns {string}
 * @throws {Error}
 */
TurkishString.clear = function (source) {
    return TurkishString.resolve(source).replace(CLEAR_LETTER_REGEX, clearLetter);
};

/**
 * Transform turkish special letters to english letters.
 * @returns {string}
 */
TurkishString.prototype.clear = function () {
    return TurkishString.clear(this.source);
};

/**
 * Compare the given strings or TurkishString instances.
 * @param {string, TurkishString} source
 * @param {string, TurkishString} destination
 * @returns {number} standard js comparison result: -1, 0, 1
 * @throws {Error}
 */
TurkishString.compare = function (source, destination) {
    const sourceStr = TurkishString.resolve(source);
    const destinationStr = TurkishString.resolve(destination);
    if (sourceStr !== destinationStr) {
        let sourceCharCode;
        let destinationCharCode;
        let maxLength = Math.max(sourceStr.length, destinationStr.length);
        for (let i = 0; i < maxLength; i++) {
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
    }
    return COMPARISON_RESULT.EQUAL;
};

/**
 * Is source greater than destination?
 * @param {string, TurkishString} source
 * @param {string, TurkishString} destination
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.isGreaterThan = function (source, destination) {
    return TurkishString.compare(source, destination) === COMPARISON_RESULT.GREATER_THAN;
};

/**
 * Is TurkishString instance greater than target?
 * @param {string, TurkishString} target
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.prototype.isGreaterThan = function (target) {
    return TurkishString.isGreaterThan(this.source, target);
};

/**
 * Is source greater than or equal to destination?
 * @param {string, TurkishString} source
 * @param {string, TurkishString} destination
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.isGreaterThanOrEqual = function (source, destination) {
    const result = TurkishString.compare(source, destination);
    return result === COMPARISON_RESULT.EQUAL || result === COMPARISON_RESULT.GREATER_THAN;
};

/**
 * Is TurkishString instance greater than or equal to target?
 * @param {string, TurkishString} target
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.prototype.isGreaterThanOrEqual = function (target) {
    return TurkishString.isGreaterThanOrEqual(this.source, target);
};

/**
 * Is source less than destination?
 * @param {string, TurkishString} source
 * @param {string, TurkishString} destination
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.isLessThan = function (source, destination) {
    return TurkishString.compare(source, destination) === COMPARISON_RESULT.LESS_THAN;
};

/**
 * Is TurkishString instance less than target?
 * @param {string, TurkishString} target
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.prototype.isLessThan = function (target) {
    return TurkishString.isLessThan(this.source, target);
};

/**
 * Is source less than or equal to destination?
 * @param {string, TurkishString} source
 * @param {string, TurkishString} destination
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.isLessThanOrEqual = function (source, destination) {
    const result = TurkishString.compare(source, destination);
    return result === COMPARISON_RESULT.LESS_THAN || result === COMPARISON_RESULT.EQUAL;
};

/**
 * Is TurkishString instance less than or equal to target?
 * @param {string, TurkishString} target
 * @returns {boolean}
 * @throws {Error}
 */
TurkishString.prototype.isLessThanOrEqual = function (target) {
    return TurkishString.isLessThanOrEqual(this.source, target);
};

module.exports = TurkishString;
