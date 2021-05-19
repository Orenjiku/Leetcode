/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let result = 0;
    let power = 1;
    while(num > 0) {
        result += (num % 2 ^ 1) * power;
        power <<= 1;
        num >>= 1;
    }
    return result
};