/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const map = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            map[`${i}-${j}`] = countNeighbors(i, j, board);
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const count = map[`${i}-${j}`];
            if (board[i][j] === 1 && (count === 2 || count === 3)) continue;
            if (board[i][j] === 1 && count < 2 || count > 3) board[i][j] = 0;
            if (board[i][j] === 0 && count === 3) board[i][j] = 1;
        }
    }
    return board;
}

const countNeighbors = (i, j, board) => {
    let tl = board[i - 1]?.[j - 1] ? board[i - 1][j - 1] : 0;
    let t = board[i - 1]?.[j] ? board[i - 1][j] : 0;
    let tr = board[i - 1]?.[j + 1] ? board[i - 1][j + 1] : 0;
    let l = board[i][j - 1] ? board[i][j - 1] : 0;
    let r = board[i][j + 1] ? board[i][j + 1] : 0;
    let bl = board[i + 1]?.[j - 1] ? board[i + 1][j - 1] : 0;
    let b = board[i + 1]?.[j] ? board[i + 1][j] : 0;
    let br = board[i + 1]?.[j + 1] ? board[i + 1][j + 1] : 0;
    return tl + t + tr + l + r + bl + b + br;
} 