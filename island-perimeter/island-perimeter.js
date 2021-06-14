/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                if (grid[i]?.[j - 1] === 1) perimeter--;
                if (grid[i]?.[j + 1] === 1) perimeter--;
                if (grid[i - 1]?.[j] === 1) perimeter--;
                if (grid[i + 1]?.[j] === 1) perimeter--;
            }
        }
    }
    return perimeter;
};