/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = -Infinity;
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        curSum = Math.max(curSum + nums[i], nums[i]);
        maxSum = Math.max(curSum, maxSum);
    }
    
    const numsLeft = [...nums];
    const numsRight = [...nums];
    
    let curSumLeft = 0;
    for (let i = numsLeft.length - 1; i >= 0 ; i--) {
        curSumLeft += numsLeft[i];
        numsLeft[i] = curSumLeft;
    }

    let curMaxLeft = -Infinity;
    for (let i = numsLeft.length - 1; i >= 0; i--) {
        curMaxLeft = Math.max(numsLeft[i], curMaxLeft);
        numsLeft[i] = curMaxLeft;
    }
    
    let curSumRight = 0;
    for (let i = 0; i < numsRight.length; i++) {
        curSumRight += numsRight[i];
        numsRight[i] = curSumRight;
    }
    
    for (let i = 0; i < numsLeft.length - 1; i++) {
        maxSum = Math.max(maxSum, numsLeft[i + 1] + numsRight[i]);
    }

    return maxSum;
}; 