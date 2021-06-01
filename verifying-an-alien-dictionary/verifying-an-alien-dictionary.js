/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
        let j = 0;
        while (j < words[i].length && j < words[i + 1].length) {
            const curWordCharVal = order.indexOf(words[i][j]);
            const nextWordCharVal = order.indexOf(words[i + 1][j]);
            if (curWordCharVal > nextWordCharVal) {
                return false;
            } else if (curWordCharVal < nextWordCharVal) {
                break;
            }
            if (j !== words[i].length - 1 && j === words[i + 1].length - 1) return false;
            j++;
        }
    }
    return true;
};