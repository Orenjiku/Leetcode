/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    let curMin = -Infinity;
    let curRank = 1;
    const map = sortedArr.reduce((acc, cur) => {
        if (cur > curMin) {
            acc[cur] = curRank;
            curMin = cur;
            curRank++;
        }
        return acc;
    }, {});
    
    return arr.map(num => map[num]);
};