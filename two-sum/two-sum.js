/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = nums.reduce((acc, cur, i) => {
        acc[cur] = i;
        return acc;
    }, {});
    for (let [i, num] of nums.entries()) {
        const num2 = target - num;
        if (map.hasOwnProperty(num2) && map[num2] !== i) {
            return [i, map[num2]]
        }
    }
};