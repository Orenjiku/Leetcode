/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                traverse(grid, i, j);
                count++;
            }
        }
    }
    return count;
};

const traverse = (grid, i, j) => {
    if (grid[i]?.[j] === undefined || grid[i]?.[j] === '0') return;
    grid[i][j] = '0';
    traverse(grid, i, j - 1);
    traverse(grid, i, j + 1);
    traverse(grid, i - 1, j);
    traverse(grid, i + 1, j);
}