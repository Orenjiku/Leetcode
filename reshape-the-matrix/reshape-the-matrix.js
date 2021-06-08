/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    const newMatrix = Array.from(new Array(r), () => new Array(c).fill(0));
    let m = 0;
    let n = 0;
    for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < newMatrix[i].length; j++) {
            newMatrix[i][j] = mat[m][n];
            n++;
            if (n === mat[0].length) {
                n = 0;
                m++;
            }
        }
    }
    return newMatrix;
};