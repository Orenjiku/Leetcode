/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let count = 0;
    let maxLength = 0;
    let start = 0;
    for (let end = 0; end < nums.length; end++) {
        const num = nums[end];
        if (num === 1) count++;
        while (end - start + 1 - count > k) {
            if (nums[start] === 1) count--;
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};