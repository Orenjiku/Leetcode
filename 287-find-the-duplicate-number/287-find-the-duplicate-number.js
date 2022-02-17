/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;
    let j = 0;
    do {
        i = nums[i];
        j = nums[nums[j]];
    } while (i !== j)
        
    i = 0;
    while (nums[i] !== nums[j]) {
        i = nums[i];
        j = nums[j];
    }
    return nums[i]
};