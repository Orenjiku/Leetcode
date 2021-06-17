/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let turn = false;
    while (n > 1) {
        for (let i = 1; i < n; i++) {
            if (n % i === 0)  {
                n -= i; 
                turn = !turn;
                break;
            }
        }
    }
    return turn % 2 === 1 ? true : false;
};