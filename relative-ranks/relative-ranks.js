/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const arr = [...score].sort((a, b) => b - a);
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        let idx = i + 1;
        if (idx === 1) idx = 'Gold Medal'
        else if (idx === 2) idx = 'Silver Medal'
        else if (idx === 3) idx = 'Bronze Medal'
        map[arr[i]] = idx.toString();
    }
    return score.map(num => map[num]);
};