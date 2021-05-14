/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let arr = s.split('');
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let leftIsChar = /[a-zA-Z]/.test(arr[l]);
        let rightIsChar = /[a-zA-Z]/.test(arr[r]);
        if (leftIsChar && rightIsChar) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        } else if (!leftIsChar) {
            l++;
        } else if (!rightIsChar) {
            r--;
        }
    }
    return arr.join('')
};