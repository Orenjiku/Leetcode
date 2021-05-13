/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            let flag1 = false;
            let flag2 = false;
            let count1 = 0;
            let count2 = 0;
            if (s[left + 1] === s[right]) {
                let newLeft = left + 1;
                let newRight = right;
                while (newLeft <= newRight) {
                    flag1 = true;
                    if (s[newLeft] !== s[newRight]) count1++;
                    newLeft++;
                    newRight--;
                }
            }
            if (s[right - 1] === s[left]) {
                let newLeft = left;
                let newRight = right - 1;
                while (newLeft <= newRight) {
                    flag2 = true;
                    if (s[newLeft] !== s[newRight]) count2++;
                    newLeft++;
                    newRight--;
                }
            }
            if (s[left + 1] !== s[right] && s[left] !== s[right - 1]) return false;
            if ((flag1 && count1 === 0) || (flag2 && count2 === 0)) return true;
            if (flag1 === false && count1 === 0 || flag2 === false && count2 === 0 || count1 > 0 && count2 > 0) return false;
        } 
        left++;
        right--;
    }
    return true;
};