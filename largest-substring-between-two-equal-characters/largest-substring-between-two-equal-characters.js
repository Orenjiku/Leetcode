/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const map = {};
    let maxLen = -1;
    for (let left = 0; left < s.length; left++) {
        let right = s.length - 1;
        while (left < right && !map.hasOwnProperty(s[left])) {
            if (s[left] === s[right]) {
                maxLen = Math.max(maxLen, right - left - 1);
                map[s[left]] = true;
                break;
            }
            right--;
        }
    }
    return maxLen;
};