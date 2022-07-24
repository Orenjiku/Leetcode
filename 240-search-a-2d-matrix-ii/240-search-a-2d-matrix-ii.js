/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
        if (target === matrix[row][col]) return true;
        if (target < matrix[row][col]) {
            col--;
        } else {
            row++;
        }
    }
    return false;
};