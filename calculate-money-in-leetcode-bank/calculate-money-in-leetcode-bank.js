/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let m = 0;
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (i % 7 === 0) m += 1;
        result += m + (i % 7)
    }
    return result;
};