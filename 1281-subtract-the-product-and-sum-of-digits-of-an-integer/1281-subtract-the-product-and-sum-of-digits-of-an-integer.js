/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const nArr = n.toString().split('');
    const product = nArr.reduce((acc, cur) => acc * Number(cur), 1);
    const sum = nArr.reduce((acc, cur) => acc + Number(cur), 0);
    return product - sum;
};