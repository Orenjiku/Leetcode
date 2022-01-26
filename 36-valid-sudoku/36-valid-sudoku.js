/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const colMap = {};
    const rowMap = {};
	for (let row = 0; row < board.length; row += 3) {
		for (let col = 0; col < board[row].length; col += 3) {
			let squareSet = new Set();
			for (let i = row; i < row + 3; i++) {
				for (let j = col; j < col + 3; j++) {
                    if (board[i][j] !== '.') {
                        if (squareSet.has(board[i][j])) return false;
                        else squareSet.add(board[i][j]);

                        if (rowMap[i]?.has(board[i][j])) return false;
                        else if (!(i in rowMap)) rowMap[i] = new Set();
                        rowMap[i].add(board[i][j]); 

                        if (colMap[j]?.has(board[i][j])) {
                            return false;
                        } else if (!(j in colMap)) colMap[j] = new Set();
                        colMap[j].add(board[i][j]);
                    }
				}
			}
		}
	}
  return true;
};