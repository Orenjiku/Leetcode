/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = s.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i; 
    }
    
    return -1;
};