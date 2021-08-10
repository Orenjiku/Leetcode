/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    let count = 0;
    Object.keys(map).forEach(key => {
        const num = Number(key);
        if (k === 0 && map[num] > 1) {
            count++;
        } else if (k > 0 && map[num + k]) {
            count++;
        }
    })
    return count;
};