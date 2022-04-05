/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let right = 1;
    while (right < nums.length) {
        while (nums[right] === nums[right - 1]) {
            right++;
        }
        if (right < nums.length) {
            left++;
            nums[left] = nums[right];
            right++;   
        }
    }
    return left + 1;
};