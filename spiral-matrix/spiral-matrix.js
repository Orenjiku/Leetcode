/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const results = [];
    let row = 0;
    let col = 0;
    let cell = 0;
    let rowRemaining = matrix.length;
    let colRemaining = matrix[0].length;
    let direction = 0;
    for (let i = 0; i < matrix.length * matrix[0].length; i++) {
        results.push(matrix[row][col]);
        cell++;
        if (cell === colRemaining && direction % 2 == 0) {
            direction = (direction + 1) % 4;
            rowRemaining--;
            cell = 0;
        } else if (cell === rowRemaining && direction % 2 === 1) {
            direction = (direction + 1) % 4;
            colRemaining--;
            cell = 0;
        }
        if (direction % 2 === 0) col += direction > 1 ? -1 : 1;
        else row += direction > 1 ? -1 : 1;
    }
    return results;
};