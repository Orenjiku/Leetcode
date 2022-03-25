/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let total = 0;
    for (let i = 0; i < costs.length; i++) {
        total += i < costs.length / 2 ? costs[i][0] : costs[i][1];
    }
    return total;
};