/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    let topCount = 0;
    let topFlippedCount = 1;
    let botCount = 0;
    let botFlippedCount = 1;
    for (let i = 1; i < A.length; i++) {
        if (topCount !== Infinity && A[i] !== A[0]) {
            if (B[i] === A[0]) topCount++;
            else topCount = Infinity;
        }
        if (topFlippedCount !== Infinity && A[i] !== B[0]) {
            if (B[i] === B[0]) topFlippedCount++;
            else topFlippedCount = Infinity;
        }
        if (botCount !== Infinity && B[i] !== B[0]) {
            if (A[i] === B[0]) botCount++;
            else botCount = Infinity;
        }
        if (botFlippedCount !== Infinity && B[i] !== A[0]) {
            if (A[i] === A[0]) botFlippedCount++;
            else botFlippedCount = Infinity;
        }
        if (topCount === Infinity && topFlippedCount === Infinity && botCount === Infinity && botFlippedCount === Infinity) return -1;
    }
    return Math.min(topCount, topFlippedCount, botCount, botFlippedCount);
};
