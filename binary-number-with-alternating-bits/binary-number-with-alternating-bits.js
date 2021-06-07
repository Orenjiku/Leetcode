/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let curNum = n % 2;
    n = Math.floor(n / 2);
    while (n > 0) {
        if (n % 2 === curNum) return false;
        curNum = n % 2;
        n = Math.floor(n / 2);
    }
    return true;
};