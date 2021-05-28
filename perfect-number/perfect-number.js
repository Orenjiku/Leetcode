/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    sum = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) sum += i + num / i;
    }
    return sum - num !== 1 && sum - num === num;
};