/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const set = new Set();
    for (const word of words) {
        let morseWord = '';
        for (const char of word) {
            morseWord += morseArr[normalizedCharCode(char)]
        }
        set.add(morseWord);
    }
    return set.size;
};

const normalizedCharCode = (char) => {
    return char.charCodeAt() - 97;
}