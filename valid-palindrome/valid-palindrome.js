/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (/[^A-Za-z0-9]/.test(s[left]) && left < right) {
            left++;
        }
        while(/[^A-Za-z0-9]/.test(s[right]) && right > left) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
};