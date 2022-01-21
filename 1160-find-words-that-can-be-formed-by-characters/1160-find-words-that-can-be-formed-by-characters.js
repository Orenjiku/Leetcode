/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map = chars.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > chars.length) continue;
        const temp = {...map};
        for (let j = 0; j < words[i].length; j++) {
            const char = words[i][j]
            if (!temp[char]) {
                break;
            } else {
                temp[char]--;
                if (temp[char] === 0) delete temp[char];
            }
            if (j === words[i].length - 1) result += words[i].length;
        }
    }
    return result;
};