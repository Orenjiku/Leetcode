/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        nums[left] = nums[right];
        left++;
        right++;
        while (nums[right] === nums[right - 1]) {
            right++;
        }
    }
    return left;
};