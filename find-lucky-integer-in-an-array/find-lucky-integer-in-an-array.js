/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let max = -1;
    const map = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === arr[i]) max = Math.max(arr[i], max);
    }
    return max;
};