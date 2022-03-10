/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let maxCount = 0
    let posCount = 0;
    let negCount = 0;
    let sign = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            posCount = 0;
            negCount = 0;
            sign = 1;
        }
        
        if (nums[i] * sign > 0) {
            posCount = Math.max(posCount, negCount) + 1;
            sign = 1;
        } else if (nums[i] * sign < 0) {
            negCount = Math.max(posCount, negCount) + 1;
            if (nums[i] > 0 && sign < 0) posCount = 1;
            sign = -1;
        }
        maxCount = Math.max(posCount, maxCount);
    }
    
    posCount = 0;
    negCount = 0;
    sign = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
        posCount = 0;
        negCount = 0;
        sign = 1;
    }

    if (nums[i] * sign > 0) {
        posCount = Math.max(posCount, negCount) + 1;
        sign = 1;
    } else if (nums[i] * sign < 0) {
        negCount = Math.max(posCount, negCount) + 1;
        if (nums[i] > 0 && sign < 0) posCount = 1;
        sign = -1;
    }
    maxCount = Math.max(posCount, maxCount);
}
    return maxCount;
};
