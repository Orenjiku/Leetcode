/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    let strSet = new Set();
    words.forEach(word => {
        const even = new Array(25).fill(0);
        const odd = new Array(25).fill(0);
        for (let i = 0; i < word.length; i++) {
            if (i % 2) even[word[i].charCodeAt() - 97]++;
            else odd[word[i].charCodeAt() - 97]++;
        }
        strSet.add(even.join('').concat(odd.join('')));
    })
    return strSet.size;
};