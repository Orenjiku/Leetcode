/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {};
    let isOdd = false;
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    Object.values(map).forEach(num => {
        total += Math.floor(num / 2) * 2;
        if (num % 2 === 1) isOdd = true;
    })
    return isOdd ? total + 1 : total;
};