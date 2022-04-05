/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const maxCount = 1;
    return isPalindrome(0, s.length - 1, s, 0, maxCount);
};

const isPalindrome = (i, j, s, count, maxCount) => {
    if (count > maxCount) return false;
    if (s[i] === s[j] && (i === j || i + 1 == j)) return true;
    while (i < j) {
        if (s[i] !== s[j]) {
            return isPalindrome(i + 1, j, s, count + 1, maxCount) || isPalindrome(i, j - 1, s, count + 1, maxCount);
        }
        i++;
        j--;
    }
    return true;
}