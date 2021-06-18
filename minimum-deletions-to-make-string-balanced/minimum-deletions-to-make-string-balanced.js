/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const dp = new Array(s.length + 1).fill(0);
    let bcount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') dp[i + 1] = Math.min(dp[i] + 1, bcount);
        else {
            dp[i + 1] = dp[i];
            bcount++;
        }
    }
    return dp[s.length];
};