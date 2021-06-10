/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const result = new Set();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && new RegExp(`${words[j]}`).test(words[i])) result.add(words[j]);
        }
    }
    return Array.from(result);
};