/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const arr = s.match(/[a-zA-Z0-9]/g) || [];
    let str = '';
    let hyphenIdx = arr.length % k === 0 ? k : arr.length % k;
    for (let i = 0; i < arr.length; i++) {
        if (hyphenIdx === i) {
            str += '-'
            hyphenIdx += k;   
        }
        str += arr[i].toUpperCase();
    }
    return str;
};