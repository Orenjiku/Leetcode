/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    while (/\([a-z]*\)/g.test(s)) {
        const words = s.match(/\([a-z]*\)/g);
        words.forEach(word => {
            const reversedWord = word.slice(1, word.length - 1).split('').reverse().join('');
            s = s.replace(word, reversedWord);
        })
    }
    return s;
};