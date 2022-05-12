/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    const comboSet = new Set();
    dfs(nums, [], '', comboSet, result);
    return result;
};

const dfs = (arr, comboArr, comboStr, comboSet, result) => {
    if (arr.length === 0) {
        if (!comboSet.has(comboStr)) {
            comboSet.add(comboStr);
            result.push([...comboArr]);
        }
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        comboArr.push(arr[i]);
        dfs([...arr.slice(0, i), ...arr.slice(i + 1)], comboArr, comboStr + arr[i], comboSet, result);
        comboArr.pop();
    }
}