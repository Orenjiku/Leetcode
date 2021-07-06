/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const queriesArr = queries.map(str => findMinFreq(str));
    const wordsArr = words.map(str => findMinFreq(str)).sort((a, b) => a - b);
    return queriesArr.map(queryFreq => {
        let count = 0;
        for (let j = 0; j < wordsArr.length; j++) {
            if (queryFreq < wordsArr[j]) {
                count = wordsArr.length - j;
                break;
            }
        }
        return count;
    })
};

const findMinFreq = (str) => {
    const arr = new Array(26).fill(0);
    let min = Infinity;
    for (let i = 0; i < str.length; i++) {
        const charIdx = str[i].charCodeAt() - 97;
        arr[charIdx]++;
        if (charIdx < min) min = charIdx;
    }
    return arr[min];
}