/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        const cur = accounts[i].reduce((acc, cur) => acc + cur, 0);
        max = Math.max(cur, max);
    }
    return max;
};