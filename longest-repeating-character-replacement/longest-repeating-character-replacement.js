/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = {};
    let maxCount = 0;
    let maxLength = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        map[char] = (map[char] || 0) + 1;
        maxCount = Math.max(maxCount, map[char]);
        while (end - start - maxCount + 1 > k) {
            map[s[start]]--;
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};