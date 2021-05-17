/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const arr = s.match(/[a-zA-Z0-9]/g) || [];
    let str = '';
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        str += arr[i].toUpperCase();
        count++;
        if (count % k === 0 && i !== 0) str += '-'
    }
    return str.split('').reverse().join('');
};