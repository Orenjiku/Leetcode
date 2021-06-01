/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const map = sentence.split('').reduce((acc, cur) => {
        if (!acc[cur]) acc[cur] = true;
        return acc;
    }, {});
    
    for (let i = 0; i < 26; i++) {
        if (!map[String.fromCharCode(i + 97)]) return false;
    }
    return true;
};