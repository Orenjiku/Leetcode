/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    while (i >= 0) {
        const newDigit = digits[i] + 1;
        if (newDigit < 10) {
            digits[i] = newDigit;
            break;
        } else {
            digits[i] = 0;
            i--;
            if (i === -1) digits.unshift(1);
        }
    }
    return digits;
};