/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length - 2; i++) {
        const triple = nums.slice(i, i + 3);
        if (triple[0] + triple[1] > triple[2] && triple[0] + triple[2] > triple[1] && triple[1] + triple[2] > triple[0]) {
            return triple[0] + triple[1] + triple[2];
        }
    }
    return 0;
};