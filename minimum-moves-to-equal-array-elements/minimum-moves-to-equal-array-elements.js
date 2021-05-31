/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let result = 0;
    for (let i = len - 1; i >= 0; i--) {
        result += nums[i] - nums[0];
    }
    return result;
};