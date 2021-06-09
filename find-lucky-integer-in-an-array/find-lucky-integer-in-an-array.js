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
    Object.keys(map).forEach(num => {
        if (Number(num) === map[num]) max = Math.max(max, map[num]);
    })
    return max;
};