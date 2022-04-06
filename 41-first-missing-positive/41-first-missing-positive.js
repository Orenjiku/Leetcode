/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) nums[i] = Infinity;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let j = Math.abs(nums[i]) - 1;
        if (j >= 0 && j < nums.length) {
            nums[j] = -1 * Math.abs(nums[j])
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return i + 1;
    }
    
    return nums.length + 1;
};