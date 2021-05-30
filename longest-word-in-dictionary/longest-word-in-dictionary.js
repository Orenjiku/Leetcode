/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let longestWord = '';
    words.sort((a, b) => a.length - b.length);
    for (let i = words.length - 1; i >= 0; i--) {
        if (longestWord === '' || words[i].length === longestWord.length) {
            for (let j = words[i].length - 1; j >= 0; j--) {
                const isMatch = words.includes(words[i].slice(0, j));
                if (!isMatch) {
                    break;
                } else if (j === 1 && isMatch) {
                    if (longestWord === '') {
                        longestWord = words[i];
                    } else {
                        for (let k = 0; k < longestWord.length; k++) {
                            if (longestWord[k] !== words[i][k]) {
                                longestWord = words[i][k].charCodeAt() < longestWord[k].charCodeAt() ? words[i] : longestWord;
                                break;
                            }
                        }
                    }
                }
            }
        } else {
            break;
        }
    }
    if (longestWord === '' && words[0].length === 1) return words[0];
    else if (longestWord === '' && words[0].length > 1) return '';
    else return longestWord;
};
