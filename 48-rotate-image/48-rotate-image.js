/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    while (left < right) {
        let top = left;
        let bottom = right;
        
        let i = 0;
        while (i < right - left) {
            let topLeft = matrix[top][left + i];
            
            matrix[top][left + i] = matrix[bottom - i][left];
            
            matrix[bottom - i][left] = matrix[bottom][right - i];
            
            matrix[bottom][right - i] = matrix[top + i][right];
            
            matrix[top + i][right] = topLeft;
            
            i++;
        }
        left++;
        right--;
    }
    return matrix;
};