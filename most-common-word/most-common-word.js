/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase();
    while (banned.length > 0) {
        let bannedWord = banned.pop();
        paragraph = paragraph.replace(new RegExp(`${bannedWord}`, 'g'), '');
    };
    const arr = paragraph.match(/[a-z]+/g);
    const map = {};
    let max = 0;
    let mostCommonWord = '';
    arr.forEach(word => {
        map[word] = (map[word] || 0) + 1;
        if (map[word] > max) {
            mostCommonWord = word;
            max = Math.max(max, map[word]);   
        }
    });
    return mostCommonWord;
};