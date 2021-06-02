/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const temp = [...arr].sort((a, b) => a - b);
    let curMin = temp[0];
    let curRank = 1;
    const map = temp.reduce((acc, cur) => {
        if (cur > curMin) {
            curRank += 1;
            acc[cur] = curRank;
            curMin = cur;
        }
        return acc;
    }, {[temp[0]]: curRank});
    
    return arr.map(num => map[num]);
};