/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    const dp = new Array(nums.length).fill(0);
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < dp.length; j++) {
            const num = nums[i];
            const colNum = nums[j];
            if (colNum === num) {
                dp[j] = dp[j];
            } else if (colNum < num) {
                dp[j] = dp[j] + num - colNum;
            } else {
                dp[j] = dp[j] + colNum - num;
            }
            if (i === nums.length - 1) min = Math.min(min, dp[j]);
        }
    }
    return min;
};