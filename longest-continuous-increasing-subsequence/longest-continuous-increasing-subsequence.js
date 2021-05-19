/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 1;
    let left = 0;
    let right = 1;
    let curr = 1;
    while (right <= nums.length) {
        if (nums[right] > nums[right - 1]) {
            curr += 1;
        } else {
            max = Math.max(max, curr);
            curr = 1;
        }
        right++;
    }
    return max;
};