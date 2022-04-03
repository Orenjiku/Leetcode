/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length < 2) return nums;
    let i = nums.length - 2;
    while (i >= 0) {
        if (nums[i] < nums[i + 1]) {
            let nextMin = nums[i + 1];
            let nextMinIdx = i + 1;
            for (let idx = i + 1; idx < nums.length; idx++) {
                if (nums[idx] > nums[i] && nums[idx] <= nextMin) {
                    nextMin = nums[idx];
                    nextMinIdx = idx;
                }
            }
            [nums[i], nums[nextMinIdx]] = [nums[nextMinIdx], nums[i]];
            break;
        }
        i--;
    }
    
    let left = i + 1;
    let right = nums.length - 1;
    while (left <= right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums;
};