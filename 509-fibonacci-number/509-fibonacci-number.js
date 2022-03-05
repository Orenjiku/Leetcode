/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    if (n === 0) return 0
    if (n === 1) return 1;
    if (!(n in memo)) memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
};