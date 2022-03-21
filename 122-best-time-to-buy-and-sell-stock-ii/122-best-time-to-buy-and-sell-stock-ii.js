/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        if (prices[i + 1] < prices[i] || prices[i + 1] === undefined) {
            max += prices[i] - minPrice;
            minPrice = prices[i + 1];
        }
    }
    
    return max;
};