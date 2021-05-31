/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let highCount = 0;
        let lowCount = 0;
        let isHighHarmonious = false;
        let isLowHarmonious = false;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === nums[i] + 1) {
                highCount++;
                isHighHarmonious = true;
            } else if (nums[j] === nums[i] - 1) {
                lowCount++;
                isLowHarmonious = true;
            } else if (nums[j] === nums[i]) {
                lowCount++;
                highCount++;
            }
        }
        max = Math.max(isHighHarmonious ? highCount : 0, isLowHarmonious ? lowCount : 0, max);
    }
    return max;
};