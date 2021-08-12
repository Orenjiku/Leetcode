/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    const result = [];
    const min = nums.length / 3;
    for (let num in map) {
        if (map[num] > min) result.push(num);
    }
    return result;
};