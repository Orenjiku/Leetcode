/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const arr = new Array(37).fill(0);
    for (let i = n; i >= 1; i--) {
        arr[getSum(i)] += 1;
    }
    const max = Math.max(...arr);
    return arr.filter(num => num === max).length;
};

const getSum = (num) => num === 0 ? 0 : num % 10 + getSum(Math.floor(num / 10));