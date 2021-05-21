/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const map = {};
    target.forEach(num => map[num] = (map[num] || 0) + 1);
    for (let num of arr) {
        if (!map[num] || map[num] === 0) return false;
        else map[num]--;
    }
    return true;
};