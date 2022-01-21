/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const result = [];
    for (let word of words) {
        const cMap = {};
        const pMap = {};
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            const p = pattern[i]
            if (!pMap[p] && !cMap[c]) {
                pMap[p] = c;
                cMap[c] = p;
            } else if ((cMap[c] && cMap[c] !== p) || (pMap[p] && pMap[p] !== c)) {
                match = false;
                break;
            }
            if (i === word.length - 1) result.push(word);
        }
    }
    return result;
};