/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ranges = [];
    let start = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            start === nums[i] ? ranges.push(nums[i].toString()) : ranges.push(`${start}->${nums[i]}`); 
            start = nums[i + 1];
        }
    }
    return ranges;
};