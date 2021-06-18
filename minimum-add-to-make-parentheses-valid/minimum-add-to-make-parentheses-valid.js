/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let count = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') balance++;
        if (s[i] === ')') balance--;
        if (balance === -1) {
            count++;
            balance++;
        }
    }
    return count + balance;
};