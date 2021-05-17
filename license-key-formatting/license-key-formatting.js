/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const arr = s.replace(/-/g, '').split('');
    let i = arr.length - k;
    while (i > 0) {
        arr.splice(i, 0, '-');
        i -= k;
    }
    return arr.join('').toUpperCase();
};