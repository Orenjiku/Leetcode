/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    return (word.match(/\d+/g) || []).reduce((acc, cur) => acc.add(cur.replace(/^0+/, '')),new Set()).size
};