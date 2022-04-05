/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    while (top < bottom && left < right) {
        let topLeft = [top, left];
        let topRight = [top, right];
        let botLeft = [bottom, left];
        let botRight = [bottom, right];
        while (topLeft[1] < right) {
            let temp = matrix[topLeft[0]][topLeft[1]];
            matrix[topLeft[0]][topLeft[1]] = matrix[botLeft[0]][botLeft[1]];
            matrix[botLeft[0]][botLeft[1]] = matrix[botRight[0]][botRight[1]];
            matrix[botRight[0]][botRight[1]] = matrix[topRight[0]][topRight[1]];
            matrix[topRight[0]][topRight[1]] = temp;
            topLeft[1]++;
            topRight[0]++;
            botRight[1]--;
            botLeft[0]--;
        }
        top++;
        left++;
        right--;
        bottom--;
    }
    return matrix;
};