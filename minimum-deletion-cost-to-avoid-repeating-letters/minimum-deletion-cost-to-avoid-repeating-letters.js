/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let result = 0;
    let max = 0;
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        max = Math.max(max, cost[i]);
        total += cost[i];
        if (s[i] !== s[i + 1]) {
            result += total - max;
            max = 0;
            total = 0;
        }
    }
    return result;
};