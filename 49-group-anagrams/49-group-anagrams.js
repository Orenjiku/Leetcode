/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sortedStrs = [...strs];
    const map = {}
    for (let i = 0; i < sortedStrs.length; i++) {
        const key = sortedStrs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
        if (map.hasOwnProperty(key)) {
            map[key].push(strs[i]);
        } else {
            map[key] = [strs[i]];
        }
    }
    return Object.values(map);
};