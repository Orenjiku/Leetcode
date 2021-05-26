/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let total = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        total += (columnTitle[i].charCodeAt() - 64) * 26 ** (columnTitle.length - 1 - i);
    }
    return total;
};