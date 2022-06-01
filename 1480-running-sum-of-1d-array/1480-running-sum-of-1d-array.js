/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let prevSum = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i] += prevSum;
        prevSum = nums[i];
    }
    return nums;
};