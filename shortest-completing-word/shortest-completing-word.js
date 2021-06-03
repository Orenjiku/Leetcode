/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const arr = (licensePlate.match(/[a-zA-Z]/g) || []).map(letter => letter.toLowerCase());
    let shortest = '';
    let minLetters = Infinity;
    for (let i = 0; i < words.length; i++) {
        let curWord = words[i];
        for (let j = 0; j < arr.length; j++) {
            const len = curWord.length;
            curWord = curWord.replace(new RegExp(`${arr[j]}`), '');
            if (curWord.length === len) break;
            if (words[i].length < minLetters && j === arr.length - 1) {
                minLetters = words[i].length;
                shortest = words[i];
            }
        }
    }
    return shortest;
};