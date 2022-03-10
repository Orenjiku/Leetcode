/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    for (const c of s) {
        map[c] = (map[c] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i; 
    }
    
    return -1;
};