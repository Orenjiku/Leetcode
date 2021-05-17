/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let start = 0 - matrix.length + 1;
    while (start < matrix[0].length) {
        const nums = new Set().add(undefined);
        let row = 0;
        let col = start;
        while (row < matrix.length) {
            nums.add(matrix[row][col]);
            if (nums.size > 2) return false;
            row++;
            col++;
        }
        start++;
    }
    return true;
};