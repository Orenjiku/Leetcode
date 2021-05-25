/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const minRowNums = {};
    const maxColNums = {};
    for (let j = 0; j < matrix[0].length; j++) {
        let maxColNum = -Infinity;
        for (let i = 0; i < matrix.length; i++) {
            if (j === 0) {
                const minRowNum = Math.min(...matrix[i]);
                minRowNums[minRowNum] = true;
            }
            maxColNum = Math.max(maxColNum, matrix[i][j]);
        }
        maxColNums[maxColNum] = true;
    }
    const result = [];
    for (let num in minRowNums) {
        if (num in maxColNums) result.push(num);
    }
    return result;
};