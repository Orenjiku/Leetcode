/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ranges = [];
    let str = `${nums[0]}`;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1] && parseInt(str, 10) === nums[i]) {
            ranges.push(str);
            str = `${nums[i + 1]}`;
        } else if (nums[i] + 1 !== nums[i + 1]) {
            str += `->${nums[i]}`;
            ranges.push(str);
            str = `${nums[i + 1]}`;
        }
    }
    return ranges;
};