/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const dp = Array.from(new Array(board.length), () => new Array(board[0].length).fill(0));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = [board[i][j], 0];
            if ((Array.isArray(board[i][j]) && board[i][j][0] === 0) || board[i][j] === 0) {
                if (countNeighbors(board, i, j) === 3) board[i][j][1] = 1;
            } else if ((Array.isArray(board[i][j]) && board[i][j][0] === 1) || board[i][j] === 1) {
                const neighbors = countNeighbors(board, i, j);
                if (neighbors === 2 || neighbors === 3) board[i][j][1] = 1;
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = board[i][j][1];
        }
    }
    return board;
};

const countNeighbors = (matrix, row, col) => {
    const tl = matrix[row - 1]?.[col - 1] ? (Array.isArray(matrix[row - 1][col - 1]) ? matrix[row - 1][col - 1][0] : matrix[row - 1][col - 1]) : 0;
    const t = matrix[row - 1]?.[col] ? (Array.isArray(matrix[row - 1][col]) ? matrix[row - 1][col][0] : matrix[row - 1][col]) : 0;
    const tr = matrix[row - 1]?.[col + 1] ? (Array.isArray(matrix[row - 1][col + 1]) ? matrix[row - 1][col + 1][0] : matrix[row - 1][col + 1]) : 0;
    const l = matrix[row][col - 1] ? (Array.isArray(matrix[row][col - 1]) ? matrix[row][col - 1][0] : matrix[row][col - 1]) : 0;
    const r = matrix[row][col + 1] ? (Array.isArray(matrix[row][col + 1]) ? matrix[row][col + 1][0] : matrix[row][col + 1]) : 0;
    const bl = matrix[row + 1]?.[col - 1] ? (Array.isArray(matrix[row + 1][col - 1]) ? matrix[row + 1][col - 1][0] : matrix[row + 1][col - 1]) : 0;
    const b = matrix[row + 1]?.[col] ? (Array.isArray(matrix[row + 1][col]) ? matrix[row + 1][col][0] : matrix[row + 1][col]) : 0;
    const br = matrix[row + 1]?.[col + 1] ? (Array.isArray(matrix[row + 1][col + 1]) ? matrix[row + 1][col + 1][0] : matrix[row + 1][col + 1]) : 0;
    return tl + t + tr + l + r + bl + b + br;
}