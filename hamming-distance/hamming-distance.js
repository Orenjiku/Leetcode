/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    while (x || y) {
        if ((x % 2) !== (y % 2)) count++;
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
    }
    return count;
};