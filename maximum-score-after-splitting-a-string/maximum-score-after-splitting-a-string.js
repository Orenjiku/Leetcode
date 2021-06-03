/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let left = s[0] === '0' ? 1 : 0;
    let right = (s.slice(1).match(/1/g) || []).length;
    let max = left + right;
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === '0') left++;
        if (s[i] === '1') right--;
        max = Math.max(left + right, max);
    }
    return max;
};