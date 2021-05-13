/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let strArr = text.match(/[a-zA-Z]+/g);
    let newStr = strArr.sort((a, b) => a.length - b.length);
    newStr.forEach((str, i) => newStr[i] = i === 0 ? str.charAt(0).toUpperCase() + str.slice(1) : newStr[i] = str.toLowerCase());
    return newStr.join(' ');
};