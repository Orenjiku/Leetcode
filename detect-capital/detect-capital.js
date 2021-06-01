/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return (word.match(/^[A-Z]{1}[a-z]*$|^[A-Z]+$|^[a-z]+$/g) || []).length;
};