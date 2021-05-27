/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;
    const nums = [...Array(n).fill(true)];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * i; j < n; j += i) {
            if (nums[j] === true) nums[j] = false;
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (nums[i] === true) count++;
    }
    return count;
};