/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    const arr = [a, b, c].sort((a, b) => a - b);
    let leftMoves = arr[1] - arr[0] - 1;
    let rightMoves = arr[2] - arr[1] - 1;
    let min = 0;
    let max = leftMoves + rightMoves;
    if (leftMoves === 0 && rightMoves === 0) min = 0;
    else if (leftMoves === 0 || rightMoves === 0 || leftMoves === 1 || rightMoves === 1) min = 1;
    else min = 2;
    return [min, max];
};