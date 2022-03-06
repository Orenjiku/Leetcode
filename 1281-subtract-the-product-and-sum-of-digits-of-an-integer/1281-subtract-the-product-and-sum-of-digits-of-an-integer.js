/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    while (n !== 0) {
        const remainder = n % 10;
        product *= remainder;
        sum += remainder;
        n = Math.floor(n / 10)
    }
    return product - sum;
};