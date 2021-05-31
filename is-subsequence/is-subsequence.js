/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const regex = new RegExp(s.split('').join('\.*'), 'g');
    return regex.test(t);
};