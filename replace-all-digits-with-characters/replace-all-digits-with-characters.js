/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt() < 97 || arr[i].charCodeAt() > 122) {
            arr[i] = String.fromCharCode(arr[i - 1].charCodeAt() + parseInt(arr[i], 10));
        }
    }
    return arr.join('');
};