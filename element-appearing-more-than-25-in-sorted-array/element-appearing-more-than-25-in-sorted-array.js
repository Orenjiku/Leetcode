/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const len = arr.length;
    let ans;
    const map = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        if (acc[cur] / len > 0.25) ans = cur;
        return acc;
    }, {});
    return ans;
};