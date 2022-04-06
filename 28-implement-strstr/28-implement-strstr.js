/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    for (let i = 0; i < haystack.length; i++) {
        let haystackIdx = i;
        let needleIdx = 0;
        while (needle[needleIdx] === haystack[haystackIdx] && needleIdx < needle.length && haystackIdx < haystack.length) {
            if (needleIdx === needle.length - 1) return i;
            haystackIdx++;
            needleIdx++;
        }
    }
    return -1;
};