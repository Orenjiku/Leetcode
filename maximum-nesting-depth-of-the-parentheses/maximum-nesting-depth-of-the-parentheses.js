/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
            maxCount = Math.max(maxCount, count);
        }
        if (s[i] === ')') count--;
    }
    return maxCount;
};