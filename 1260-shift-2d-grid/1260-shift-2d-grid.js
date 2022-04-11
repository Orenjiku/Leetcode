/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = grid.flat();
    k = k % arr.length;
    arr = [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)];
    
    for (let i = 0; i < arr.length; i++) {
        let row = Math.floor(i / grid[0].length);
        let col = i % grid[0].length;
        grid[row][col] = arr[i];
    }
    return grid;
};