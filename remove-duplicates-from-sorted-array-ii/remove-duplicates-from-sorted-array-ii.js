/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let curNum = -Infinity;
    let count = 0;
    let curIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === curNum && count < 2) {
            [nums[curIdx], nums[i]] = [nums[i], nums[curIdx]];
            count++;
            curIdx++;
        } else if (nums[i] !== curNum) {
            curNum = nums[i];
            [nums[curIdx], nums[i]] = [nums[i], nums[curIdx]];
            count = 1
            curIdx++;
        }
    }
    nums.splice(curIdx, nums.length);
};