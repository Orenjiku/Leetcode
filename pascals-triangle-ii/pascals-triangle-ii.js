/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const matrix = new Array(rowIndex + 1);
    for (let i = 1; i <= matrix.length; i++) {
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
    return matrix[rowIndex];
};