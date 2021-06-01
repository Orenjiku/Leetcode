/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let coord = [0, 0];
    const map = {'00': true};
    const directions = {'N': [0, 1], 'E': [1, 0], 'S': [0, -1], 'W': [-1, 0]};
    for (let i = 0; i < path.length; i++) {
        const direction = directions[path[i]];
        coord[0] += direction[0];
        coord[1] += direction[1];
        if (map[`${coord[0]}${coord[1]}`]) return true;
        else map[`${coord[0]}${coord[1]}`] = true;
    }
    return false;
};