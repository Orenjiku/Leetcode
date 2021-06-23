/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    const sideLen = matchsticks.reduce((acc, cur) => acc + cur) / 4;
    matchsticks.sort((a, b) => b - a);
    let isSquare = false;
    if (Math.max(...matchsticks) < sideLen && Math.max(...matchsticks) + Math.min(...matchsticks) > sideLen) return false;
    const traverse = (matchsticks, set, curSideLen, numSides, idx) => {
        if (curSideLen === sideLen) {
            numSides += 1;
            curSideLen = 0;   
        }
        if (numSides === 4 && set.size === matchsticks.length) {
            isSquare = true;
            return;
        }
        for (let i = 0; i < matchsticks.length; i++) {
            if (curSideLen + matchsticks[i] <= sideLen && !set.has(i)) {
                curSideLen += matchsticks[i];
                set.add(i);
                traverse(matchsticks, set, curSideLen, numSides, i);
                if (isSquare) return true;
                // if (noMatch) return false;
                curSideLen -= matchsticks[i];
                set.delete(i);
            }
        }
    }
    traverse(matchsticks, new Set(), 0, 0, 0);
    return isSquare;
};