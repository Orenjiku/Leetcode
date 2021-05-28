/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    if (points[0].toString() === points[1].toString() || points[1].toString() === points[2].toString() || points[0].toString() === points[2].toString()) {
        return false;
    }
    const getSlope = (point1, point2) => {
        return point2[0] - point1[0] === 0 ? 'vertical' : (point2[1] - point1[1]) / (point2[0] - point1[0]);
    }
    const m12 = getSlope(points[0], points[1]);
    const m13 = getSlope(points[0], points[2]);
    if (m12 !== m13) return true;
    if (m12 === 'vertical' && m13 === 'vertical') return false; 
    return points[0][1] - m12 * points[0][0] !== points[0][1] - m13 * points[0][0];
};