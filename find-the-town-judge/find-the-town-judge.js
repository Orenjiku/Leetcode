/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const arr = Array.from(new Array(n), () => new Set());
    for (let i = 0; i < trust.length; i++) {
        if (arr[trust[i][1] - 1]) arr[trust[i][1] - 1].add(trust[i][0]);
        arr[trust[i][0] - 1] = false;
    }
    return arr.reduce((acc, cur, i) => cur && cur.size === n - 1 ? i + 1 : acc, -1)
};