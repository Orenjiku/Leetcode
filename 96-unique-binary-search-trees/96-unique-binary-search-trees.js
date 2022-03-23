/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += numTrees(i - 1) * numTrees(n - i);
    }
    return count;
};