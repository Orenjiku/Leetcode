/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = (n) => {
    let dp = new Array(n).fill(0);
    let i2 = i3 = i5 = 0;
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        let next2 = dp[i2] * 2;
        let next3 = dp[i3] * 3;
        let next5 = dp[i5] * 5;
        let min = Math.min(next2, next3, next5);
        dp[i] = min;
        if (min == next2) i2++;
        if (min == next3) i3++;
        if (min == next5) i5++;
    }
    return dp[n - 1];
};