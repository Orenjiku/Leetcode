/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    const combo = new Set();
    dfs(nums, [], combo, result);
    return result;
};

const dfs = (arr, curCombo, combo, result) => {
    if (arr.length === 0) {
        const comboStr = curCombo.join('')
        if (!combo.has(comboStr)) {
            combo.add(comboStr);
            result.push([...curCombo]);
        }
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        curCombo.push(arr[i]);
        dfs([...arr.slice(0, i), ...arr.slice(i + 1)], curCombo, combo, result);
        curCombo.pop();
    }
}