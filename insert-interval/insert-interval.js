/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (newInterval[1] < intervals[0]?.[0]) {
        intervals.unshift(newInterval);
        return intervals;
    }
    if (newInterval[0] > intervals[intervals.length - 1]?.[1]) {
        intervals.push(newInterval);
        return intervals;
    }
    if (intervals.length === 0) return [newInterval];
    
    let addIn = false;
    let startIdx = 0;
    let endIdx = 0;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < intervals.length; i++) {
        const leftNum = intervals[i][0];
        const rightNum = intervals[i][1]
        if (newInterval[0] <= rightNum && addIn === false) {
            addIn = true;
            startIdx = i;
            min = Math.min(newInterval[0], leftNum);
        }
        if (newInterval[1] >= leftNum) {
            endIdx = i;
            max = Math.max(newInterval[1], rightNum);
        }
    }
    intervals.splice(startIdx, endIdx - startIdx + 1, [min, max]);
    return intervals
};