/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0;
    let maxAvg = -Infinity;
    let sum = 0;
    let len = 0;
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        len++;
        if (len === k) {
            maxAvg = Math.max(maxAvg, sum / k).toFixed(5);
            sum -= nums[start];
            start++;
            len--;
        }
    }
    return maxAvg;
};