/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    return text.match(new RegExp(`(?<=(?:[^a-z]|^)${first} ${second} )[a-z]+`, 'g')) || [];
};