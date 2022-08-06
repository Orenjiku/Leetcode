/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const result = [];
    dfs(0, [], nums, result)
    return result;
};

const dfs = (idx, curArr, nums, result) => {
    if (curArr.length >= 2) result.push([...curArr]);
    
    const seen = new Set();
    for (let i = idx; i < nums.length; i++) {
        if (seen.has(nums[i])) continue;
        if (curArr.length === 0 || nums[i] >= curArr[curArr.length - 1]) {
            seen.add(nums[i])
            dfs(i + 1, [...curArr, nums[i]], nums, result);
        }
    }
}