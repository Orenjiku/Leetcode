/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;
    while (numBottles >= numExchange) {
        const drink = Math.floor(numBottles / numExchange);
        total += drink;
        numBottles = drink + numBottles % numExchange;
    }
    return total;
};