/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 0, prev = 0, cur = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) {
            count += Math.min(prev, cur);
            prev = cur;
            cur = 1;
        } else {
            cur++;
        }
    }
    return count += Math.min(prev, cur);
};