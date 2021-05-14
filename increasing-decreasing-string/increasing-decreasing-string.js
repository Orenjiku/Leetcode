/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const characters = new Array(26).fill(0);
    let result = ''
    for (let i = 0; i < s.length; i++) {
        characters[s[i].charCodeAt() - 97]++ 
    }
    let count = 0;
    while (count < s.length) {
        for (let i = 0; i < characters.length; i++) {
            if (characters[i] > 0) {
                result += String.fromCharCode(i + 97);
                characters[i]--;
                count++;
            }
        }
        for (let i = characters.length - 1; i >= 0; i--) {
            if (characters[i] > 0) {
                result += String.fromCharCode(i + 97);
                characters[i]--;
                count++;
            }
        }
    }
    return result;
};