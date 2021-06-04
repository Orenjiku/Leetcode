/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    const tower = [];
    for (let i = 1; i <= query_row + 1; i++) {
        tower.push(new Array(i).fill(0))
    }
    tower[0][0] = poured;
    for (let row = 1; row < tower.length; row++) {
        for (let col = 0; col < tower[row].length; col++) {
            const leftGlass = tower[row - 1][col - 1] > 1? (tower[row - 1][col - 1] - 1) / 2 : 0;
            const rightGlass = tower[row - 1][col] > 1 ? (tower[row - 1][col] - 1) / 2 : 0;
            tower[row][col] = leftGlass + rightGlass;
        }    
    }
    return tower[query_row][query_glass] >= 1 ? 1 : tower[query_row][query_glass];
};