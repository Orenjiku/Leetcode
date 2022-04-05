/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let top = left;
            let bot = right;
            let topLeft = matrix[top][left + i];
            matrix[top][left + i] = matrix[bot - i][left];
            matrix[bot - i][left] = matrix[bot][right - i];
            matrix[bot][right - i] = matrix[top + i][right];
            matrix[top + i][right] = topLeft;
        }
        left++;
        right--;
    }
};