/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const map = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '.') continue;
            const rowsKey = `rows${i}`;
            const colsKey = `cols${j}`;
            const diagsKey = `diags${Math.floor(i / 3)}-${Math.floor(j / 3)}`
            if (!map.hasOwnProperty(rowsKey)) map[rowsKey] = new Set();
            if (!map.hasOwnProperty(colsKey)) map[colsKey] = new Set();
            if (!map.hasOwnProperty(diagsKey)) map[diagsKey] = new Set();
            if (map[rowsKey].has(board[i][j]) || 
                map[colsKey].has(board[i][j]) || 
                map[diagsKey].has(board[i][j])) {
                return false;
            } else {
                map[rowsKey].add(board[i][j]);
                map[colsKey].add(board[i][j]);
                map[diagsKey].add(board[i][j]);
            }
        }
    }
    return true;
};