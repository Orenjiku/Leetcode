/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1;
    let col = matrix[0].length - 1;
    while (row >= 0 && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (target < matrix[row][0]) {
            row--;
            col = matrix[row]?.length - 1;
        } else if (target < matrix[row][col]) {
            col--;
        } else if (target > matrix[row][col]) {
            return false;
        }
    }
    return false;
}