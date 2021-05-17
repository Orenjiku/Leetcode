/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let totalNumSpaces = text.match(/ /g)?.length || 0;
    let words = text.match(/[a-zA-Z]+/g) || [];
    const numSpaces = words.length > 1 ? Math.floor(totalNumSpaces / (words.length - 1)) : 0;
    let str = '';
    for (let i = 0; i < words.length; i++) {
        str += i !== words.length - 1 ? words[i] + ' '.repeat(numSpaces) : words[i] + ' '.repeat(totalNumSpaces - ((words.length - 1) * numSpaces));
    }
    return str;
};