/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map = {};
    let missingNum;
    let duplicatNum;
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    };
    for (let i = 1; i <= nums.length; i++) {
        if (!map[i]) missingNum = i;
        if (map[i] === 2) duplicateNum = i
    }
    return [duplicateNum, missingNum]
};