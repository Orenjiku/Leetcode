/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    return nums.filter(num => num < pivot).concat(nums.filter(num => num === pivot)).concat(nums.filter(num => num > pivot));
};