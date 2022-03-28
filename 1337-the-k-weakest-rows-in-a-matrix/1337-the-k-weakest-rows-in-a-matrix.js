/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const dp = [];
    const map = {};
    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for (let j = 0; j < mat[i].length; j++) {
            count += mat[i][j] === 1 ? 1 : 0;   
        }
        dp.push(i);
        map[i] = count;
    }
    
    return dp.sort((a, b) => {
        return map[a] === map[b] ? a - b : map[a] - map[b];
    }).slice(0, k);
};