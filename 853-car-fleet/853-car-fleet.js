/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const pair = position.map((position, idx) => [position, speed[idx]]).sort((a, b) => b[0] - a[0]);

    const stack = [];
    for (const [position, speed] of pair) {
        stack.push((target - position) / speed);
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop()
        }
    }

    return stack.length;
};