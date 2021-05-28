/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) return false;
    sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
         if (num % i === 0) sum += i + num / i;
    }
    return sum === num;
};