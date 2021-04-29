/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let result = 0;
    let maximum = cost[0];
    let total = cost[0];
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            maximum = Math.max(maximum, cost[i + 1]);
            total += cost[i + 1];
            count++;
        } else {
            count > 1 ? result += total - maximum : result += 0;
            maximum = cost[i + 1];
            total = cost[i + 1];
            count = 1;
        }
    }
    return result;
};