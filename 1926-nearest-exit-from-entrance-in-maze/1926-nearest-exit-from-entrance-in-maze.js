/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const [row, col] = entrance;
    maze[row][col] = 0;
    const queue = [entrance];
    let minDist = Infinity;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]] //up, right, down, left
    
    while (queue.length > 0) {
        const [curCellRow, curCellCol] = queue.shift();
        for (let i = 0; i < dir.length; i++) {
            const [rowIncrement, colIncrement] = dir[i];
            const newCellRow = curCellRow + rowIncrement;
            const newCellCol = curCellCol + colIncrement;
            if (maze[newCellRow]?.[newCellCol] === undefined) {
                if (curCellRow === entrance[0] && curCellCol === entrance[1]) continue;
                minDist = Math.min(maze[curCellRow][curCellCol], minDist);
            } else if (maze[newCellRow][newCellCol] === '.') {
                maze[newCellRow][newCellCol] = maze[curCellRow][curCellCol] + 1;
                queue.push([newCellRow, newCellCol]);
            }
        }
    }
    return minDist === Infinity ? -1 : minDist;
};