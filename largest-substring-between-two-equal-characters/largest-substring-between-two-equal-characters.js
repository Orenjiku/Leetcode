/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let maxLen = -1;
    for (let i = 0; i < s.length; i++) {
        const curLetter = s[i];
        for (let j = i; j < s.length; j++) {
            if (curLetter === s[j]) {
                maxLen = Math.max(maxLen, j - i - 1);
            }
        }
    }
    return maxLen;
};