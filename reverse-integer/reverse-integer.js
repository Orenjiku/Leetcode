/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let count = -1;
    const isNegative = x < 0 ? true : false;
    if (isNegative) x *= -1;
    const digits = []
    while (x > 0) {
        digits.push(x % 10);
        x = Math.floor(x / 10);
        count++;
    }
    const reverse = (isNegative ? -1 : 1) * digits.reduce((acc, cur) =>  acc + cur * 10 ** count--, 0);
    return (reverse > 2 ** 31 - 1 || reverse < (-2) ** 31) ? 0 : reverse;
};