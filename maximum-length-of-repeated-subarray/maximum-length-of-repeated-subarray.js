/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const dp = Array.from(new Array(nums1.length), () => new Array(nums2.length).fill(0));
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) dp[i][j] = dp[i - 1]?.[j - 1] ? dp[i - 1][j - 1] + 1 : 1;
        }
    }
    return dp.reduce((acc, cur) => acc = Math.max(...cur, acc), 0);
};