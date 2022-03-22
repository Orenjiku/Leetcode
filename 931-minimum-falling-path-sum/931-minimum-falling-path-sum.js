/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let prev = [...matrix[0]];
    for (let i = 1; i < matrix.length; i++) {
        const cur = new Array(matrix[0].length).fill(0);
        for (let j = 0; j < matrix[i].length; j++) {
            const topLeft = prev[j - 1] || Infinity;
            const top = prev[j];
            const topRight = prev[j + 1] || Infinity;
            cur[j] = Math.min(topLeft, top, topRight) + matrix[i][j];
        }
        prev = cur;
    }
    return Math.min(...prev);
};