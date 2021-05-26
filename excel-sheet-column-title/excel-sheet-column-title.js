/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        result = String.fromCharCode((columnNumber - 1) % 26 + 65) + result;
        columnNumber = columnNumber % 26 === 0 ? Math.floor(columnNumber / 26) - 1 : Math.floor(columnNumber / 26);
    }
    return result;
};