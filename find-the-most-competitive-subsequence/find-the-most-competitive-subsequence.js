/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    const stack = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        const remaining = nums.length - i - 1
        const stackLen = k - remaining;
        
        while(nums[i] < stack[stack.length - 1] && stack.length >= stackLen) stack.pop();
        stack.push(nums[i]);
    }
    return stack.slice(0, k);
};