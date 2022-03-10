/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (const c of magazine) {
        map[c] = (map[c] || 0) + 1;
    }
    for (const c of ransomNote) {
        if (!(c in map) || map[c] === 0) return false;
        map[c]--;
    }
    return true;
};