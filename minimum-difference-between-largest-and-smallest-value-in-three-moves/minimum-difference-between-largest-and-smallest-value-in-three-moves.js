/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    nums.sort((a, b) => a - b);    
    const recursive = (arr, left, right, count, memo) => {
        if (right <= left) return 0;
        if (count === 0) {
            memo[`${left}${right}`] = arr[right] - arr[left]; 
            return arr[right] - arr[left];
        }
        let removeLeftNum = memo[`${left}${right}`] ? memo[`${left}${right}`] : recursive(arr, left + 1, right, count - 1, memo);
        let removeRightNum = memo[`${left}${right}`] ? memo[`${left}${right}`] : recursive(arr, left, right - 1, count - 1, memo);
        return Math.min(removeLeftNum, removeRightNum);
    }
    return recursive(nums, 0, nums.length - 1, 3, {})
};