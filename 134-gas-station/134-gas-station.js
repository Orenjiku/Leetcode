/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let curGas = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        curGas += gas[i] - cost[i];
        totalGas += gas[i] - cost[i];
        if (curGas < 0) {
            curGas = 0;
            start = i + 1;
        }
    }
    return totalGas < 0 ? -1 : start;
}