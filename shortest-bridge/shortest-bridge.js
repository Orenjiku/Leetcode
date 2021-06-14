/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const setA = new Set();
    const setB = new Set();
    let foundA = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                const set = foundA ? setB : setA
                traverse(grid, i, j, set);
                foundA = true;
            }
        }
    }
    
    let minDist = Infinity;
    setA.forEach(coordA => {
        setB.forEach(coordB => {
            minDist = Math.min(minDist, Math.abs(coordA[0] - coordB[0]) + Math.abs(coordA[1] - coordB[1]) - 1);
        })
    })
    return minDist;
}

const traverse = (grid, i, j, set) => {
    if (grid[i]?.[j] !== 1) return;
    grid[i][j] = -1;
    set.add([i, j]);
    traverse(grid, i, j - 1, set);
    traverse(grid, i, j + 1, set);
    traverse(grid, i - 1, j, set);
    traverse(grid, i + 1, j, set);
}