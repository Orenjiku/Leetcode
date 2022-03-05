/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxTotal = -Infinity;
    let curTotal = -Infinity;
    for (let num of nums) {
        if (curTotal + num < num) {
            curTotal = num;
        } else {
            curTotal += num;
        }
        maxTotal = Math.max(curTotal, maxTotal);
    }
    return maxTotal;
};