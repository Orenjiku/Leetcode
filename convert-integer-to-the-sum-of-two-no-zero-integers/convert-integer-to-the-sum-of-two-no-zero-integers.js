/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i = 1; i < n; i++) {
        if (!/0/.test(i) && !/0/.test((n - i))) return [i, n - i];
    }
};