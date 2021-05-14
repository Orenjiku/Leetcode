/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.match(/[a-zA-Z0-9]+/g);
    return arr.reverse().join(' ')
};