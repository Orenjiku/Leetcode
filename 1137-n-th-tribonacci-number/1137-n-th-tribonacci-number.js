/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n, memo) {
    memo = memo || {};
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (!memo.hasOwnProperty(n)) {
        memo[n] = tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo);
    }
    return memo[n];
};