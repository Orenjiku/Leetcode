/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const checkPalindrome = (i, j, s) => {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }
    
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return checkPalindrome(i + 1, j, s) || checkPalindrome(i, j - 1, s);
        }
        i++;
        j--;
    }
    return true;
};