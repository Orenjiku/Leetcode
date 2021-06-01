/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const matrix = Array.from(new Array(3), () => new Array(3).fill(0));
    moves.forEach((coord, i) => {
        if (i % 2 === 0) matrix[coord[0]][coord[1]] = 'A';
        else matrix[coord[0]][coord[1]] = 'B';
    });
    
    let major = '';
    let minor = '';
    for (let j = 0 ; j < matrix[0].length; j++) {
        let vertical = '';
        for (let i = 0; i < matrix.length; i++) {
            vertical += matrix[i][j];
            let horizontal = matrix[i].join('');
            if (j === 0 && horizontal === 'AAA' || horizontal === 'BBB') return horizontal[0];
            if (i === j) major += matrix[i][j]
            if (i + j === 2) minor += matrix[i][j];
        }
        if (vertical === 'AAA' || major === 'AAA' || minor === 'AAA') return 'A';
        if (vertical === 'BBB' || major === 'BBB' || minor === 'BBB') return 'B'
    }
    return moves.length === 9 ? 'Draw' : 'Pending'
};