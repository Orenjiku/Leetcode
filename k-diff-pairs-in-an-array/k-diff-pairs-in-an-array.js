/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const set = new Set();;
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                if (!set.has(`${nums[i]}-${nums[j]}`) || !set.has(`${nums[j]}-${nums[i]}`)) {
                    count++;
                    set.add(`${nums[i]}-${nums[j]}`);
                    set.add(`${nums[j]}-${nums[i]}`);
                }
            }
        }
    }
    return count;
};