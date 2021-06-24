/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = Array.from(new Array(matrix.length), () => new Array(matrix[0].length).fill(0));
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const left = Number(dp[i][j - 1]);
            const top =  Number(dp[i - 1]?.[j]);
            const topLeft = Number(dp[i - 1]?.[j - 1]);
            if (matrix[i][j] === '1' && top > 0 && topLeft > 0 && left > 0) {
                dp[i][j] = Math.min(left, top, topLeft) + 1;
                max = Math.max(max, dp[i][j] * dp[i][j]);
            } else if (matrix[i][j] === '1') {
                dp[i][j] = Number(matrix[i][j]);
                max = Math.max(max, dp[i][j])
            }
        }
    }
    return max;
};