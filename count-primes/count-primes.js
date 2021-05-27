/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;
    const nums = [...Array(n).keys()];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * i; j < n; j += i) {
            nums[j] = -1;
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (nums[i] !== -1) count++;
    }
    return count;
};