/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const map = {};
    s1.split(' ').forEach(str => map[str] = (map[str] || 0) + 1);
    s2.split(' ').forEach(str => map[str] = (map[str] || 0) + 1);
    return Object.keys(map).filter(str => map[str] === 1);
};