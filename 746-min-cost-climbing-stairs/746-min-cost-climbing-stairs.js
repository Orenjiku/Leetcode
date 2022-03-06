/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let costMinus2 = cost[0];
    let costMinus1 = cost[1];
    let result = Math.min(costMinus1, costMinus2);
    for (let i = 2; i <= cost.length; i++) {
        const costVal = cost[i] === undefined ? 0 : cost[i];
        result = costVal + Math.min(costMinus1, costMinus2);
        costMinus2 = costMinus1;
        costMinus1 = result;
    }
    return result;
};