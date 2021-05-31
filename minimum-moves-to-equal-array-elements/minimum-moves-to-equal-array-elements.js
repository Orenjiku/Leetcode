/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const min = Math.min(...nums);
    return nums.reduce((acc, cur) => acc + cur - min, 0);
};