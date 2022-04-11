/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = [];
    for (let i = 0; i < grid.length; i++) {
        arr = arr.concat(grid[i]);
    }
    const leftSide = arr.splice(0, arr.length - (k % arr.length));
    arr = arr.concat(...leftSide);
    
    for (let i = 0; i < arr.length; i++) {
        let row = Math.floor(i / grid[0].length);
        let col = i % grid[0].length;
        grid[row][col] = arr[i];
    }
    return grid;
};