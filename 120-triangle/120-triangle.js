/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let prev = [...triangle[0]];
    for (let i = 1; i < triangle.length; i++) {
        const cur = [];
        for (let j = 0; j < triangle[i].length; j++) {
            const top = prev[j] === undefined ? Infinity : prev[j];
            const topLeft = prev[j - 1] === undefined ? Infinity : prev[j - 1];
            cur.push(triangle[i][j] + Math.min(top, topLeft));
        }
        prev = cur;
    }
    return Math.min(...prev);
};