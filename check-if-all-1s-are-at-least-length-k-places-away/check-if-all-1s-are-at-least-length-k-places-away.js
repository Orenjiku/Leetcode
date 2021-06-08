/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let prevIdx = nums.indexOf(1);
    for (let i = prevIdx + 1; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i - prevIdx - 1 < k) return false;
            prevIdx = i;
        }
    }
    return true;
};