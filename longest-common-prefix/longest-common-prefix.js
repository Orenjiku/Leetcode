/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    for (let i = 1; i <= strs[0].length; i++) {
        const pattern = strs[0].slice(0, i);
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].match(new RegExp(`^${pattern}`))) return strs[0].slice(0, i - 1);
        }
    }
    return strs[0];
};