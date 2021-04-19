/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const findRow = (matrix, target) => {
        const len = matrix.length;
        const firstRow = matrix[0];
        const lastRow = matrix[matrix.length - 1];
        if (target < firstRow[0]) return -1;
        if (target > lastRow[lastRow.length - 1]) return -1;
        for (let i = 0; i < len; i++) {
            if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
                return i;
            }
        }
        return -1;
    }
    const row = findRow(matrix, target);
    if (row === -1) return false;
    let flag = false;
    const bs = (left, right) => {
        if (left > right) return;
        const mid = left + Math.floor((right - left) / 2);
        if (target === matrix[row][mid]) {
            flag = true;
            return
        }
        if (target < matrix[row][mid]) bs(left, mid - 1);
        if (target > matrix[row][mid]) bs(mid + 1, right);
    }
    bs(0, matrix[0].length - 1)
    return flag
};