/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    const answer = Array.from(new Array(mat.length), () => new Array(mat[0].length).fill(0));
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let sum = 0;
            for (let m = Math.max(i - k, 0); m <= Math.min(mat.length - 1, i + k); m++) {
                for (let n = Math.max(j - k, 0); n <= Math.min(mat[m].length - 1, j + k); n++) {
                    sum += mat[m][n];
                }
            }
            answer[i][j] = sum;
        }
    }
    return answer;
};