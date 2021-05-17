/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let col = 0 - matrix.length - 1;
    while (col < matrix[0].length) {
        const nums = new Set();
        let row = 0;
        let curCol = col;
        while (row < matrix.length) {
            if (matrix[row][curCol] !== undefined && nums.size === 0) {
                nums.add(matrix[row][curCol]);
            } else if (matrix[row][curCol] !== undefined && !nums.has(matrix[row][curCol]) && nums.size === 1) {
                return false;
            }
            row++;
            curCol++;
        }
        col++;
    }
    return true;
};