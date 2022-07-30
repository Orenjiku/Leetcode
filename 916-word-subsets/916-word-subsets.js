/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const charMap2 = {};
    for (const word of words2) {
        const temp = {};
        for (const char of word) {
            temp[char] = (temp[char] || 0) + 1;
            charMap2[char] = Math.max(temp[char], charMap2[char] || 0)
        }
    }
    
    const result = [];
    for (const word of words1) {
        let validWord = true;
        const charMap1 = {};
        for (const char of word) {
            if (char in charMap2) {
                charMap1[char] = (charMap1[char] || 0) + 1;
            }
        }
        
        for (const char in charMap2) {
            if (!(char in charMap1) || charMap1[char] < charMap2[char]) {
                validWord = false;
                break;
            }
        }
        if (validWord) result.push(word);
    }
    
    return result;
};