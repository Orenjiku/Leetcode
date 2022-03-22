/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const dp = Array.from(new Array(grid.length), () => new Array(grid[0].length).fill(0));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const top = dp[i - 1]?.[j] || 0;
            const left = dp[i]?.[j - 1] || 0;
            if (i === 0) dp[i][j] = left + grid[i][j];
            else if (j === 0) dp[i][j] = top + grid[i][j];
            else dp[i][j] = Math.min(top, left) + grid[i][j];
        }
    }
    return dp[dp.length - 1][dp[0].length - 1];
};