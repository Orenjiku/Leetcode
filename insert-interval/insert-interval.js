/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    
    let insertStart = false;
    let start = 0;
    let end = 0;
    let min = newInterval[0];
    let max = newInterval[1];
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] <= intervals[i][1] && insertStart === false) {
            insertStart = true;
            start = i;
            min = Math.min(newInterval[0], intervals[i][0]);
        }
        if (newInterval[1] >= intervals[i][0]) {
            end = i;
            max = Math.max(newInterval[1], intervals[i][1]);
        }
    }
    if (newInterval[1] < intervals[0][0]) intervals.unshift(newInterval);
    else if (newInterval[0] > intervals[intervals.length - 1][1]) intervals.push(newInterval);
    else intervals.splice(start, end - start + 1, [min, max]);
    return intervals;
};