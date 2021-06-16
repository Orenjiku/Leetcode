/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (new RegExp(`(?<=^| )${searchWord}(?=[a-z]*)`).test(words[i])) return i + 1;
    }
    return -1;
};