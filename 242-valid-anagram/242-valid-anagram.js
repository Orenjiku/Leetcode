/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    s = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    t = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) return false;
    }
    return true;
};
