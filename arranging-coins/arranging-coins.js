/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count = 0;
    let coins = 0;
    while(coins <= n) coins += ++count; 
    if(count <= 1) return count; 
    return count - 1;
};