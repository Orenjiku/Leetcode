/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const newGrid = Array.from(new Array(grid.length), () => new Array(grid[0].length).fill(0));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const newI = (i + Math.floor((j + k) / grid[0].length)) % grid.length;
            const newJ = (j + k) % grid[0].length;
            newGrid[newI][newJ] = grid[i][j];
        }
    }
    return newGrid;
};