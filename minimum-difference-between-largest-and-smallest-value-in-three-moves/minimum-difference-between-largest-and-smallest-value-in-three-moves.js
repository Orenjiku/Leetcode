/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    nums.sort((a, b) => a - b);    
    const recursive = (arr, count) => {
        if (arr.length === 0 || arr.length === 1) return 0;
        if (count === 0) return arr[arr.length - 1] - arr[0];
        let left = recursive(arr.slice(1), count - 1);
        let right = recursive(arr.slice(0, arr.length - 1), count - 1);
        return Math.min(left, right);
    }
    return recursive(nums, 3)
};