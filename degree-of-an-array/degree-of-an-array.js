/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let max = -Infinity;
    const map = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        max = Math.max(acc[cur], max);
        return acc;
    }, {});
    
    let minDeg = Infinity;
    for (let key in map) {
        if (map[key] === max) {
            minDeg = Math.min(minDeg, nums.lastIndexOf(Number(key)) - nums.indexOf(Number(key)) + 1);
        }
    }
    return minDeg;
};