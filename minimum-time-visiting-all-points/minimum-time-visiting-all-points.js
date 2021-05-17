/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let curr = points[0];
    let count = 0;
    for (let i = 1; i < points.length; i++) {
        count += Math.max(Math.abs(points[i][0] - curr[0]), Math.abs(points[i][1] - curr[1]));
        curr = points[i];
    }
    return count;
};