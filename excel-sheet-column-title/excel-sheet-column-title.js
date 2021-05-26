/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = '';
    while (columnNumber > 0) {
        const idx = (columnNumber - 1) % 26;
        result = letters[idx] + result;
        columnNumber = columnNumber % 26 === 0 ? Math.floor(columnNumber / 26) - 1 : Math.floor(columnNumber / 26);
    }
    return result;
};