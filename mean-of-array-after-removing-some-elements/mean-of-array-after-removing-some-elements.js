/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const newArr = [...arr].sort((a, b) => a - b).slice(arr.length * 0.05, arr.length - (arr.length * 0.05));
    return (newArr.reduce((acc, cur) => acc += cur, 0) / newArr.length).toFixed(5);
};