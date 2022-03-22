/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sold = -Infinity;
    let held = -Infinity;
    let reset = 0;
    for (let i = 0; i < prices.length; i++) {
        const temp = sold;
        sold = held + prices[i];
        held = Math.max(held, reset - prices[i]);
        reset = Math.max(reset, temp);
    }
    return Math.max(sold, reset);
};