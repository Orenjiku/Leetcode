/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = [].concat(...grid);
    k = k % arr.length;
    arr = [...arr.slice(-k), ...arr.slice(0, -k)];
    
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = arr[i * grid[i].length + j];
    }
  }
    return grid;
};