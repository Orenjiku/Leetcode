/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0;
    let leftSum = 0;
    nums.forEach(num => total += num);
    for (let i = 0; i < nums.length; i++) {
        total -= nums[i]
        if (leftSum === total) return i;
        leftSum += nums[i];
    }
    return -1;
};