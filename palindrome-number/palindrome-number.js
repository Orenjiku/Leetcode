/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let strX = x.toString();
    return strX === strX.split('').reverse().join('');
};