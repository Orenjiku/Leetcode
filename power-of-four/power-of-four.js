/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let pow = 0;
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (n === 4 ** i) return true;
    }
    return false
};