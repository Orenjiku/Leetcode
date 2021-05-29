/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max = -Infinity;
    let second = -1;
    for (let i = 0; i < s.length; i++) {
        const isNumber = /\d/.test(s[i]);
        const num = isNumber ? Number(s[i]) : NaN;
        if (isNumber && max === -Infinity && num > max) {
            max = num;
        } else if (isNumber && num > max) {
            second = max;
            max = num;
        } else if (isNumber && num > second && num < max) {
            second = num;
        }
    }
    return second;
};