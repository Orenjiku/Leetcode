/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const map = {};
    let max = 0;
    for (let i = n; i >= 1; i--) {
        if (i > 9) {
            const sum = i.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
            map[sum] = (map[sum] || 0) + 1;
            max = Math.max(max, map[sum]);
        } else {
            map[i] = (map[i] || 0) + 1;
            max = Math.max(max, map[i]);
        }
    }
    return Object.values(map).filter(num => num === max).length;
};