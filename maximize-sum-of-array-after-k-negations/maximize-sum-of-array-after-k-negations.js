/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0;
    while (nums[i] < 0 && k > 0) {
        nums[i] *= -1;
        i++;
        k--;
    }
    if (k > 0 && k % 2 === 1) {
        nums[i - 1] < nums[i] ? nums[i - 1] *= -1 : nums[i] *= -1;
    }
    return nums.reduce((acc, cur) => acc + cur, 0);
};