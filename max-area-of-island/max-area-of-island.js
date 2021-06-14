/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, traverse(grid, i, j));
            }
        }
    }
    return maxArea;
};

const traverse = (grid, i, j) => {
    if (grid[i]?.[j] === undefined || grid[i]?.[j] === 0) return 0;
    grid[i][j] = 0;
    return traverse(grid, i, j - 1) + traverse(grid, i, j + 1) + traverse(grid, i - 1, j) + traverse(grid, i + 1, j) + 1;
}