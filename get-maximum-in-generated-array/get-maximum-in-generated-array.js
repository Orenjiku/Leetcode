/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n < 2) return n;
    const nums = new Array(n + 1).fill(0);
    nums[1] = 1;
    for (let i = 1; i <= n; i++) {
        if (2 * i >= 2 && 2 * i <= n) nums[2 * i] = nums[i];
        if (2 * i + 1 >= 2 && 2 * i + 1 <= n) nums[2 * i + 1] = nums[i] + nums[i + 1];
    }
    return Math.max(...nums);
};