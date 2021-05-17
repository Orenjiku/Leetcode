/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const addNums = (arr) => {
        return arr.reduce((acc, cur) => {
            return acc += cur;
        })
    };
    let max = 0;
    accounts.forEach(account => {
        max = Math.max(max, addNums(account));
    })
    return max;
};