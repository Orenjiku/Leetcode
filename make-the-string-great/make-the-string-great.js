/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let isGood = false;
    while (isGood === false) {
        isGood = true;
        let str = '';
        let i = 0;
        while (i < s.length) {
            if (i === s.length - 1 || Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt()) !== 32) {
                str += s[i];
                i++;
            } else {
                isGood = false;
                i += 2;
            }
        }
        if (isGood) return str
        else s = str;
    }
};