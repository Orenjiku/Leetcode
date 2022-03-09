/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSet = new Set();
    const colSet = new Set();
    const gridSet = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== '.') {
                const rowKey = `${i}-${board[i][j]}`;
                const colKey = `${j}-${board[i][j]}`;
                const gridKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}-${board[i][j]}`;
                if (rowSet.has(rowKey) || colSet.has(colKey) || gridSet.has(gridKey)) {
                    return false;
                }
                rowSet.add(rowKey);
                colSet.add(colKey);
                gridSet.add(gridKey);
            }
        }
    }
    return true;
};