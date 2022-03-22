/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = checkPali(s, i, i);
        const len2 = checkPali(s, i, i + 1);
        const maxLen = Math.max(len1, len2);
        if (maxLen > right - left) {
            left = i - Math.floor((maxLen - 1) / 2);
            right = i + Math.floor(maxLen / 2);
        }
    }
    return s.substring(left, right + 1);
};

const checkPali = (s, left, right) => {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
        left--;
        right++;
    }
    return right - left - 1;
};