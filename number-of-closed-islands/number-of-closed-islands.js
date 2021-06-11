/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0 && traverse(grid, i, j)) count++;
        }
    }
    return count;
};

const traverse = (grid, i, j) => {
    if (grid[i][j] === 1) return true;
    if (i === 0 || j === 0 || i === grid.length -1 || j === grid[0].length - 1) return false;
    grid[i][j] = 1;
    let top = traverse(grid, i - 1, j);
    let bot = traverse(grid, i + 1, j);
    let left = traverse(grid, i, j - 1);
    let right = traverse(grid, i, j + 1);
    return top && bot && left && right;
}