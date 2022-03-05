/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxTotal = -Infinity;
    let curTotal = -Infinity;
    for (let num of nums) {
        maxTotal = Math.max(curTotal, maxTotal);
        if (curTotal + num < num) {
            curTotal = num;
        } else {
            curTotal += num;
        }
    }
    return Math.max(curTotal, maxTotal);
};