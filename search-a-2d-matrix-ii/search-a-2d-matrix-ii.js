/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let w = matrix[0].length;
    let h = matrix.length;
    let i = h - 1;
    let j = 0;
    while (i >= 0 && j < w) {
        if (target === matrix[i][j]) return true;
        if (target < matrix[i][j]) {
            i--;
        } else if (target > matrix[i][j]) {
            j++;
        }
    }
    return false;
};