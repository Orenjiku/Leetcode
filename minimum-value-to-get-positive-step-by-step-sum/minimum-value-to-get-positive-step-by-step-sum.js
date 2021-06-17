/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let minPos = 1;
    let curTotal = 0;
    for (let i = 0; i < nums.length; i++) {
        curTotal += nums[i];
        if (curTotal < 0) minPos = Math.max(minPos, Math.abs(curTotal) + 1);
    }
    return minPos;
};