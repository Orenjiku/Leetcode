/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let wordFound = false;
    const traverse = (i, j, word, set) => {
        if (board[i]?.[j] !== word[0] || set.has(`${i}-${j}`)) return;
        if (board[i]?.[j] === word[0] && word.length === 1) {
            wordFound = true;
            return;
        }
        if (board[i]?.[j] === word[0]) {
            set.add(`${i}-${j}`)
            const remainingWord = word.slice(1);
            traverse(i, j + 1, remainingWord, set);
            traverse(i, j - 1, remainingWord, set);
            traverse(i + 1, j, remainingWord, set);
            traverse(i - 1, j, remainingWord, set);
            set.delete(`${i}-${j}`);
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            traverse(i, j, word, new Set());
            if (wordFound) break;
        }
    }
    return wordFound;
};