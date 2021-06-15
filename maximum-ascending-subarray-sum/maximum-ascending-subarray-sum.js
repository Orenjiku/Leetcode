/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = nums[0];
    let cur = nums[0];
    for (let end = 1; end < nums.length; end++) {
        if (nums[end] > nums[end - 1]) {
            cur += nums[end];
            max = Math.max(max, cur);
        } else {
            cur = nums[end];
        }
    }
    return max;
};