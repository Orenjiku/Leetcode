/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity;
    let start = 0;
    let total = 0;
    for (let end = 0; end < nums.length; end++) {
        total += nums[end];
        while (total >= target) {
            min = Math.min(min, end - start + 1);
            total -= nums[start];
            start++;
        }
    }
    return min === Infinity ? 0 : min;
};