/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const result = new Set();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[i].includes(words[j])) result.add(words[j]);
        }
    }
    return Array.from(result);
};