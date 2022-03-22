/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let max = 0;
    let hold = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, hold + prices[i] - fee);
        hold = Math.max(hold, max - prices[i]);
    }
    return max;
};