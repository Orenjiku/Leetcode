/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = Array.from(new Array(n), () => new Array(n).fill(0));
    let row = 0, column = 0, direction = 0, cell = 0, segment = n;
        for (let number = 1; number <= n ** 2; number++) {
        matrix[row][column] = number;
        if (++cell === segment) {
          direction = (direction + 1) % 4;
          segment -= direction % 2;
          cell = 0;
        }
        if (direction % 2) row += direction > 1 ? -1 : 1;
        else column += direction > 1 ? -1 : 1;
    }
    return matrix;
};