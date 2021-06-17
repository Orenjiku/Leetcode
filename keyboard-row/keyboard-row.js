/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const set1 = new Set('qwertyuiop'.split(''));
    const set2 = new Set('asdfghjkl'.split(''));
    const set3 = new Set('zxcvbnm'.split(''));
    const result = []
    words.forEach(word => {
        let inSet1 = 0;
        let inSet2 = 0;
        let inSet3 = 0;
        for (let i = 0; i < word.length; i++) {
            const char = word[i].toLowerCase();
            if (set1.has(char) && inSet1 === 0) inSet1 = 1;
            if (set2.has(char) && inSet2 === 0) inSet2 = 1;
            if (set3.has(char) && inSet3 === 0) inSet3 = 1;
            if (inSet1 + inSet2 + inSet3 > 1) break;
        }
        if (inSet1 + inSet2 + inSet3 === 1) result.push(word);
    })
    return result;
};