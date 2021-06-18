/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let count = 0;
    const map = {'(': 0, ')': 0}
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            map['(']++;
        } else if (s[i] === ')' && map['('] <= map[')']) {
            map['(']++;
            map[')']++;
            count++;
        } else {
            map[')']++;
        }
    }
    count += map['('] - map[')'];
    return count;
};