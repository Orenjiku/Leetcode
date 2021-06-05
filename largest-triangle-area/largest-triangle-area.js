/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0;
    const combinations = (combo, start, points) => {
        if (combo.length === 3) {
            maxArea = Math.max(maxArea, calcArea(combo[0], combo[1], combo[2]));
            return;
        }
        for (let i = start; i < points.length; i++) {
            combo.push(points[i]);
            combinations(combo, i + 1, points);
            combo.pop();
        }
    }
    combinations([], 0, points);
    return maxArea;
};

const calcArea = ([x1, y1], [x2, y2], [x3, y3]) => {
    return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
}
