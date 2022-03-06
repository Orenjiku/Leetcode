/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
    let mm = Math.floor(targetSeconds / 60);
    let ss = targetSeconds % 60;
    const mmss = findCost(mm, ss, startAt, moveCost, pushCost)
    const mm99 = findCost(mm - 1, ss + 60, startAt, moveCost, pushCost);
    return Math.min(mmss, mm99);
};

const findCost = (mm, ss, startAt, moveCost, pushCost) => {
    if (mm < 0 || mm > 99 || ss > 99) return Infinity;
    mm = mm === 0 ? '' : mm.toString();
    ss = mm !== '' && ss < 10 ? '0' + ss.toString() : ss.toString();
    const timeStr = mm + ss;
    let totalCost = 0;
    for (let i = 0; i < timeStr.length; i++) {
        if (timeStr[i] !== startAt.toString()) totalCost += moveCost;
        totalCost += pushCost
        startAt = timeStr[i];
    }
    return totalCost;
}