/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const gasTotal = gas.reduce((acc, cur) => acc + cur, 0);
    const costTotal = cost.reduce((acc, cur) => acc + cur, 0);
    if (gasTotal < costTotal) return - 1;
    let curStation = 0;
    let start = -1;
    let curGas = 0;
    let count = 0;
    while (curStation !== start) {
        curGas += gas[curStation];
        if (curGas < cost[curStation]) {
            curGas = 0;
            start = -1;
        } else {
            curGas -= cost[curStation];
            if (start === -1) start = curStation;
        }
        curStation = (curStation + 1) % gas.length;
    }
    return start;
};