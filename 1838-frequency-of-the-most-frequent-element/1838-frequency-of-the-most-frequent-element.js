/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    let leftIdx = 0;
    let rightIdx = 0;
    let max = 0;
    let total = 0;
    while (rightIdx < nums.length) {
        total += nums[rightIdx];
        
        while (nums[rightIdx] * (rightIdx - leftIdx + 1) > total + k) {
            total -= nums[leftIdx];
            leftIdx++;
        }

        max = Math.max(max, rightIdx - leftIdx + 1);
        rightIdx++;
    }
    return max;
};