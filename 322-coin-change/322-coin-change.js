/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    	const coinCount = new Array(amount + 1).fill(Infinity);
	coinCount[0] = 0;
	for (let num of coins) {
		for (let i = 0; i < coinCount.length; i++) {
			if (num <= i) coinCount[i] =  Math.min(coinCount[i], 1 + coinCount[i - num]);
		}
	}
	return coinCount[amount] === Infinity ? -1 : coinCount[amount];
};