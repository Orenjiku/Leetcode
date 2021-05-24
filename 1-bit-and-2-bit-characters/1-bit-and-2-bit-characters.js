/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;
    while (i < bits.length) {
        if (bits[i] === 1) {
            i += 2;
        } else if (bits[i] === 0 && i === bits.length - 1) {
            return true;
        } else {
            i++;
        }
    }
    return false;
};