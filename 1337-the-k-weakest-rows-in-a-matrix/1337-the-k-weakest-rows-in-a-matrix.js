/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const idxArr = new Array(mat.length).fill(0).map((_, i) => i);
    const map = {};
    for (let i = 0; i < mat.length; i++) {
        map[i] = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) map[i]++;
        }
    }

    return idxArr.sort((a, b) => {
        return map[a] === map[b] ? a - b : map[a] - map[b];
    }).slice(0, k);
};