/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const point = [0, 0]
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let dir = 0;
    for (let i = 0; i < instructions.length; i++) {
        const c = instructions[i];
        if (c === 'L') dir = (dir + 3) % 4;
        else if (c === 'R') dir = (dir + 1) % 4;
        else {
            point[0] += dx[dir];
            point[1] += dy[dir];
        }
    }
    return dir !== 0 || (point[0] === 0 && point[1] === 0)
};