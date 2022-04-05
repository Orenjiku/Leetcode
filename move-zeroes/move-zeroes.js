/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = 0;
    while (left < nums.length && right < nums.length) {
        if (nums[left] !== 0 && nums[right] !== 0) {
            left++;
            right++;
        } else {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            while (nums[right] === 0) {
                right++;
            }
            while (nums[left] !== 0 && nums[left] !== undefined) {
                left++;
            }    
        }
    }
    return nums;
};