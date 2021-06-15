/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rowMap = {};
    const colMap = {};
    const arr = [];
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                rowMap[i] = (rowMap[i] || 0) + 1;
                colMap[j] = (colMap[j] || 0) + 1;
                arr.push([i, j])
            }
        }
    }
    arr.filter(pair => {
        if (rowMap[pair[0]] === 1 && colMap[pair[1]] === 1) count++;
    })
    return count;
};