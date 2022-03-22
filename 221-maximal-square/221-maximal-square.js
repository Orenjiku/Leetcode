/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = Array.from(new Array(matrix.length), () => new Array(matrix[0].length).fill(0));
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const top = dp[i - 1]?.[j] || 0;
            const left = dp[i]?.[j - 1] || 0;
            const topLeft = dp[i - 1]?.[j - 1] || 0;
            dp[i][j] = matrix[i][j] === '0' ? 0 : Number(Math.min(top, left, topLeft)) + Number(matrix[i][j]);
            max = Math.max(dp[i][j], max);
        }
    }
    return max * max;
};