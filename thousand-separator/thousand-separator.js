/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let count = 0;
    let arr = n.toString().split('');
    for (let i = arr.length - 1; i >= 0; i--) {
        count++;
        if (count === 3 && i !== 0) {
            arr.splice(i, 0, '.');
            count = 0;
        }
    }
    return arr.join('');
};