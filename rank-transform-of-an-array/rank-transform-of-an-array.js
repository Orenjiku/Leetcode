/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    let curMin = sortedArr[0];
    let curRank = 1;
    const map = sortedArr.reduce((acc, cur) => {
        if (cur > curMin) {
            curRank += 1;
            acc[cur] = curRank;
            curMin = cur;
        }
        return acc;
    }, {[sortedArr[0]]: curRank});
    
    return arr.map(num => map[num]);
};