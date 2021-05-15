/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1.length < str2.length) gcdOfStrings(str2, str1);
    for (let i = str2.length; i >= 1; i--) {
        const pattern = str2.slice(0, i);
        const reg = new RegExp(`^(${pattern})+$`);
        if (reg.test(str1) && reg.test(str2)) return pattern;
    }
    return '';
};