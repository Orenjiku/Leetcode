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
    if (combo.length <= k && sum < n) {
        for (let i = idx; i < 9; i++) {
            combo.push(i + 1);
            getCombo(k, n, i + 1, sum + i + 1, combo, res);
            combo.pop()
        }
    }
}