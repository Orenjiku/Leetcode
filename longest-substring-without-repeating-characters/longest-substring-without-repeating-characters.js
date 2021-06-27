/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {};
    let max = 0;
    let start = 0; 
    let end = 0;
    let count = 0;
    while (end < s.length) {
        map[s[end]] = (map[s[end]] || 0) + 1; 
        count++;  
        while (map[s[end]] > 1) {
            map[s[start]]--;
            start++;
            count--;
        }
        max = Math.max(max, count);
        end++;
    }
    return max;
};