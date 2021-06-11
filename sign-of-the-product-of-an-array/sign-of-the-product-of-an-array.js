/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let total = 1;
    let count = 0;
    nums.forEach(num => {
        total *= num > 0 ? 1 : num < 0 ? -1 : 0;
        count += num < 0 ? 1 : 0;
    });
    if (total === 0) return 0;
    return count % 2 === 0 ? 1 : - 1;
};