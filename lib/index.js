/**
 * RegexEscape
 * Encodes a string for using in a regular expression.
 *
 * @name RegexEscape
 * @function
 * @param {String} input The string that must be encoded.
 * @return {String} The encoded string.
 */
function RegexEscape(input) {
    return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/**
 * proto
 * Adds the `RegexEscape` function to `RegExp` class.
 *
 * @name proto
 * @function
 * @return {Function} The `RegexEscape` function.
 */
RegexEscape.proto = function () {
    RegExp.escape = RegexEscape;
    return RegexEscape;
};

module.exports = RegexEscape;
