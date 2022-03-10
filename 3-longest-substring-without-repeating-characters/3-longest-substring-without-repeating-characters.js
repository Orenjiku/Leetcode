/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLen = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        while (map[s[i]] > 1) {
            map[s[left]]--;
            left++;
        }
        maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen;
};