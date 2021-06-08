/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    let prevMin = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums.slice(i, nums.length).length <= nums[i] && nums.slice(i, nums.length).length > prevMin) {
            return nums.slice(i, nums.length).length;
        }
        prevMin = nums[i];
    }
    return -1;
};