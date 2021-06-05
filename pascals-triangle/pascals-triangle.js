/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const matrix = new Array(numRows);
    for (let i = 1; i <= numRows; i++) {
        matrix[i - 1] = new Array(i).fill(0);
    }
    matrix[0][0] = 1;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const left = matrix[i - 1][j - 1] ? matrix[i - 1][j - 1] : 0;
            const right = matrix[i - 1][j] ? matrix[i - 1][j] : 0;
            matrix[i][j] = left + right;
        }
    }
    return matrix;
};