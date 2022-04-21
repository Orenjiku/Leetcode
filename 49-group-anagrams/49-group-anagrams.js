/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sortedStrs = [...strs];
    const map = {}
    for (let i = 0; i < sortedStrs.length; i++) {
        sortedStrs[i] = sortedStrs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
    }
    for (let i = 0; i < strs.length; i++) {
        if (!map.hasOwnProperty(sortedStrs[i])) {
            map[sortedStrs[i]] = [strs[i]];
        } else {
            map[sortedStrs[i]].push(strs[i]);
        }
    }
    return Object.values(map);
};