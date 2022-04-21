/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        output[i] = nums[i - 1] * output[i - 1];
    }
    
    let r = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * r;
        r = nums[i] * r;
    }
    
    return output
};