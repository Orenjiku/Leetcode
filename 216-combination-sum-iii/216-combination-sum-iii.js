/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
    getCombo(k, n, 0, 0, [], res);
    return res;
};

const getCombo = (k, n, idx, sum, combo, res) => {
    if (sum > n || combo.length > k) return;
    if (sum === n && combo.length === k) {
        res.push([...combo]);
        return;
    }
    for (let i = idx; i < 9; i++) {
        const curNum = i + 1;
        const newSum = sum + i + 1;
        combo.push(curNum);
        if (combo.length <= k && newSum <= n) getCombo(k, n, i + 1, newSum, combo, res);
        combo.pop();
    }
}