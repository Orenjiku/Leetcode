/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -1;
    let maxIdx = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIdx = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * 2 > max && i !== maxIdx) return -1;
    }
    return maxIdx;
};