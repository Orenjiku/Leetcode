/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    for (let i = 0; i < k + 1; i++) {
        let tmpPrices = [...prices];
        for (let [s, d, p] of flights) {
            if (prices[s] === Infinity) continue;
            if (prices[s] + p < tmpPrices[d]) tmpPrices[d] = prices[s] + p;
        }
        prices = [...tmpPrices];
    }

    return prices[dst] === Infinity ? -1 : prices[dst];
};