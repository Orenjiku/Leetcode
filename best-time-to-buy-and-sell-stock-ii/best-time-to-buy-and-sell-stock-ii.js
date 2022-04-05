/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buyPrice = Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            max += prices[i + 1] - prices[i];
        }
    }
    return max;
};