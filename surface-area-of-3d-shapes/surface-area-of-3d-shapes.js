/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let total = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 0) {
                const top = grid[i - 1]?.[j] === undefined || grid[i][j] > grid[i - 1]?.[j] ?  grid[i][j] - (grid[i - 1]?.[j] || 0) : 0;
                const right = grid[i]?.[j + 1] === undefined || grid[i][j] > grid[i]?.[j + 1] ? grid[i][j] - (grid[i]?.[j + 1] || 0) : 0;
                const bot = grid[i + 1]?.[j] === undefined || grid[i][j] > grid[i + 1]?.[j] ?  grid[i][j] - (grid[i + 1]?.[j] || 0) : 0;
                const left = grid[i]?.[j - 1] === undefined || grid[i][j] > grid[i]?.[j - 1] ? grid[i][j] - (grid[i]?.[j - 1] || 0) : 0;
                total += top + right + bot + left + 2;
            }
        }
    }
    return total;
};