/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
        if (!map.hasOwnProperty(key)) map[key] = []
        map[key].push(strs[i]);
    }
    return Object.values(map);
};