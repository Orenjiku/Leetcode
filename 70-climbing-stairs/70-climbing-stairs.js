/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        const n1 = dp[i - 1];
        const n2 = dp[i - 2] || 1;
        dp[i] = n1 + n2;
    }
    return dp[dp.length - 1];
};