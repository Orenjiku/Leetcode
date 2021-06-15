/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rowMap = {};
    const colMap = {};
    const onesMap = {};
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                rowMap[i] = (rowMap[i] || 0) + 1;
                colMap[j] = (colMap[j] || 0) + 1;
                onesMap[`${i}-${j}`] = true;
            }
        }
    }
    Object.keys(onesMap).filter(str => {
        const [i, j] = str.split('-').map(val => Number(val));
        if (rowMap[i] === 1 && colMap[j] === 1) count++;
    })
    return count;
};