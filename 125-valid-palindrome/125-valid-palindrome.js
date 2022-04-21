/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z0-9]/g.test(s[i]) === true) {
            str += s[i].toLowerCase();
        } 
    }
    return str === str.split('').reverse().join('')
};