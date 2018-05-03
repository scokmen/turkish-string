const {
  clear,
  isString,
  getCharCode,
  toLowerCase,
  toUpperCase
} = require("./string-utils");

const COMPARISON_RESULT = {
  LESS_THAN: -1,
  EQUAL: 0,
  GREATER_THAN: 1
};

/**
 * creates a TurkishString instance
 * @param {string|TurkishString} source
 * @constructor
 */
function TurkishString(source) {
  this.source = TurkishString.resolve(source);
}

/**
 * creates a TurkishString instance
 * @param {string|TurkishString} source
 * @returns {TurkishString}
 */
TurkishString.create = function (source) {
  return new TurkishString(source);
};

/**
 * resolve string value from the given string or TurkishString
 * @param {string|TurkishString} source
 * @returns {string}
 * @throws {Error}
 */
TurkishString.resolve = function (source) {
  if (isString(source)) {
    return source;
  }
  else if (source instanceof TurkishString) {
    return source.toString();
  }
  else {
    throw new TypeError("expected string but found : " + JSON.stringify(source));
  }
};

/**
 * clones the instance
 * @return {TurkishString}
 */
TurkishString.prototype.clone = function () {
  return new TurkishString(this.source);
};

/**
 * returns the string content
 * @returns {string}
 */
TurkishString.prototype.toString = function () {
  return String(this.source).toString();
};

/**
 * converts to lower case
 * @param {string|TurkishString} source
 * @returns {string}
 */
TurkishString.toLowerCase = function (source) {
  return toLowerCase(TurkishString.resolve(source));
};

/**
 * converts to lower case
 * @returns {string}
 */
TurkishString.prototype.toLowerCase = function () {
  return TurkishString.toLowerCase(this.source);
};

/**
 * converts to upper case
 * @param {string|TurkishString} source
 * @returns {string}
 */
TurkishString.toUpperCase = function (source) {
  return toUpperCase(TurkishString.resolve(source));
};

/**
 * converts to upper case
 * @returns {string}
 */
TurkishString.prototype.toUpperCase = function () {
  return TurkishString.toUpperCase(this.source);
};

/**
 * replaces turkish special characters by corresponding ascii characters
 * @param {string|TurkishString} source
 * @returns {string}
 */
TurkishString.clear = function (source) {
  return clear(TurkishString.resolve(source))
};

/**
 * replaces turkish special characters by corresponding ascii characters
 * @returns {string}
 */
TurkishString.prototype.clear = function () {
  return TurkishString.clear(this.source);
};

/**
 * decides whether source is greater than destination
 * @param {string|TurkishString} source
 * @param {string|TurkishString} destination
 * @returns {boolean}
 */
TurkishString.isGreaterThan = function (source, destination) {
  return TurkishString.compare(source, destination) === COMPARISON_RESULT.GREATER_THAN;
};

/**
 * decides whether turkish string is greater than the given parameter
 * @param {string|TurkishString} target
 * @returns {boolean}
 */
TurkishString.prototype.isGreaterThan = function (target) {
  return TurkishString.isGreaterThan(this.source, target);
};

/**
 * decides whether source is greater than or equal to destination
 * @param {string|TurkishString} source
 * @param {string|TurkishString} destination
 * @returns {boolean}
 */
TurkishString.isGreaterThanOrEqual = function (source, destination) {
  return TurkishString.compare(source, destination) > COMPARISON_RESULT.LESS_THAN;
};

/**
 * decides whether turkish string is greater than or equal to the given parameter
 * @param {string|TurkishString} target
 * @returns {boolean}
 */
TurkishString.prototype.isGreaterThanOrEqual = function (target) {
  return TurkishString.isGreaterThanOrEqual(this.source, target);
};

/**
 * decides whether source is less than destination
 * @param {string|TurkishString} source
 * @param {string|TurkishString} destination
 * @returns {boolean}
 */
TurkishString.isLessThan = function (source, destination) {
  return TurkishString.compare(source, destination) === COMPARISON_RESULT.LESS_THAN;
};

/**
 * decides whether turkish string is less than the given parameter
 * @param {string|TurkishString} target
 * @returns {boolean}
 */
TurkishString.prototype.isLessThan = function (target) {
  return TurkishString.isLessThan(this.source, target);
};

/**
 * decides whether source is less than or equal to destination
 * @param {string|TurkishString} source
 * @param {string|TurkishString} destination
 * @returns {boolean}
 */
TurkishString.isLessThanOrEqual = function (source, destination) {
  return TurkishString.compare(source, destination) < COMPARISON_RESULT.GREATER_THAN;
};

/**
 * decides whether turkish string is less than or equal to the given parameter
 * @param {string|TurkishString} target
 * @returns {boolean}
 */
TurkishString.prototype.isLessThanOrEqual = function (target) {
  return TurkishString.isLessThanOrEqual(this.source, target);
};

/**
 * compares the given parameters and returns comparison result as -1, 0 or 1
 * @param {string|TurkishString} source
 * @param {string|TurkishString} destination
 * @returns {number}
 */
TurkishString.compare = function (source, destination) {
  const sourceString = TurkishString.resolve(source);
  const destinationString = TurkishString.resolve(destination);
  if (sourceString !== destinationString) {
    let minLength = Math.min(sourceString.length, destinationString.length);
    for(let i = 0; i < minLength; i++) {
      if (sourceString[i] !== destinationString[i]) {
        return Math.sign(getCharCode(sourceString[i]) - getCharCode(destinationString[i]));
      }
    }
    return sourceString.length > destinationString.length ? COMPARISON_RESULT.GREATER_THAN : COMPARISON_RESULT.LESS_THAN;
  }
  return COMPARISON_RESULT.EQUAL;
};


module.exports = TurkishString;
