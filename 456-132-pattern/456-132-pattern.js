/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = []
    let secondMax = -Infinity
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < secondMax) return true
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            secondMax = stack.pop()
        }
        stack.push(nums[i])
    }
    return false
};