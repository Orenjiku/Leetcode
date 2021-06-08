/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    let prevMin = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums.length - i <= nums[i] && nums.length - i > prevMin) {
            return nums.length - i;
        }
        prevMin = nums[i];
    }
    return -1;
};