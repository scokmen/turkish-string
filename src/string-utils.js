const TURKISH_LOWER_CASE_CHARACTER_REGEX = /[\u00E7\u011F\u0131\u0069\u00F6\u015F\u00FC]/g;
const TURKISH_UPPER_CASE_CHARACTER_REGEX = /[\u00C7\u011E\u0049\u0130\u00D6\u015E\u00DC]/g;
const TURKISH_CHARACTER_REGEX = /[\u00E7\u011F\u0131\u00F6\u015F\u00FC\u00C7\u011E\u0130\u00D6\u015E\u00DC]/g;

const PSEUDO_ASCII_CODES = {
  "ç": 99.5, "Ç": 67.5, "ğ": 103.5, "Ğ": 71.5, "ı": 104.5, "İ": 74.5,
  "ş": 115.5, "Ş": 83.5, "ö": 111.5, "Ö": 79.5, "ü": 117.5, "Ü": 85.5
};

const TURKISH_TO_ENGLISH_TRANSFORMATION_MAP = {
  "ç": "c", "ı": "i", "ğ": "g", "ş": "s", "ö": "o", "ü": "u",
  "Ç": "C", "İ": "I", "Ğ": "G", "Ş": "S", "Ö": "O", "Ü": "U"
};

const TURKISH_TO_LOWER_CASE_TRANSFORMATION_MAP = {
  "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç"
};

const TURKISH_TO_UPPER_CASE_TRANSFORMATION_MAP = {
  "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I"
};

/**
 * finds and replaces with given regular expression in the given string
 * @param {string} str
 * @param {RegExp} regexp
 * @param {Object} map
 * @returns {string}
 */
function findAndReplace(str, regexp, map) {
  return str.replace(regexp, function(char) { return map[char]; });
}

/**
 * replaces turkish special characters by corresponding ascii characters in given string
 * @param {string} str
 * @returns {string}
 */
function clear(str) {
  return findAndReplace(str, TURKISH_CHARACTER_REGEX, TURKISH_TO_ENGLISH_TRANSFORMATION_MAP);
}

/**
 * transforms the given string to lower case with turkish special characters
 * @param {string} str
 * @returns {string}
 */
function toLowerCase(str) {
  return findAndReplace(str, TURKISH_UPPER_CASE_CHARACTER_REGEX, TURKISH_TO_LOWER_CASE_TRANSFORMATION_MAP).toLowerCase();
}

/**
 * transforms the given string to upper case with turkish special characters
 * @param {string} str
 * @returns {string}
 */
function toUpperCase(str) {
  return findAndReplace(str, TURKISH_LOWER_CASE_CHARACTER_REGEX, TURKISH_TO_UPPER_CASE_TRANSFORMATION_MAP).toUpperCase();
}

/**
 * transforms the given string to title case with turkish special characters
 * @param {string} str
 * @returns {string}
 */
function toTitleCase(str) {
  return toLowerCase(str).split(' ').map(word => word.replace(word[0], toUpperCase(word[0]))).join(' ');
}

/**
 * decides whether the given parameter is string or not
 * @param  {string} str
 * @returns {boolean}
 */
function isString(str) {
  return Object.prototype.toString.call(str) === "[object String]";
}

/**
 * returns ascii code of given character
 * @param {string} char
 * @returns {number}
 */
function getCharCode(char) {
  return PSEUDO_ASCII_CODES[char] || char.charCodeAt(0);
}

module.exports = {
  clear,
  isString,
  getCharCode,
  toLowerCase,
  toUpperCase,
  toTitleCase,
};
