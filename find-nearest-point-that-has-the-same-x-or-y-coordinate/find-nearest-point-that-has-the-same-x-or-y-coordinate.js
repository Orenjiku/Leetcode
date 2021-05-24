/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let minDist = Infinity;
    let minIdx = Infinity;
    for (let i = 0; i < points.length; i++) {
        if (x === points[i][0] || y === points[i][1]) {
            const manDist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            if (manDist < minDist) {
                minDist = manDist;
                minIdx = i;
            }
        }
    }
    return minIdx === Infinity ? -1 : minIdx;
};