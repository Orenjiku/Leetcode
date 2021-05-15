/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const divident = str1.length >= str2.length ? str1 : str2;  
    const divisor = str1.length < str2.length ? str1 : str2;
    for (let i = divisor.length; i >= 1; i--) {
        const pattern = divisor.slice(0, i);
        const reg = new RegExp(`^(${pattern})+$`);
        if (reg.test(divident) && reg.test(divisor)) return pattern;
    }
    return '';
};