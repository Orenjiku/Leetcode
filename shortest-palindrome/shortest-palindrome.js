/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const reverse = s.split('').reverse().join('');
    let j = 0;
    for (let i = 0; i < reverse.length; i++) {
        if (s.slice(0, s.length - i) === reverse.slice(i, reverse.length)) {
            return reverse.slice(0, i).concat(s);
        }
    }
    return s;
};