/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    const nums = [];
    while (n > 0) {
        if (n < 1000) nums.push(`${(n % 1000).toString()}`);
        else nums.push(`.${(n % 1000).toString().padStart(3, '0')}`);
        n = Math.floor(n/1000);
    }
    return nums.reverse().join('') || "0";
};