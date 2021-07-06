/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const queriesArr = queries.map(str => findMinFreq(str));
    const wordsArr = words.map(str => findMinFreq(str)).sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < queriesArr.length; i++) {
        let count = 0;
        for (let j = 0; j < wordsArr.length; j++) {
            if (queriesArr[i] < wordsArr[j]) {
                count = wordsArr.length - j;
                break;
            }
        }
        result.push(count);
    }
    return result;
};

const findMinFreq = (str) => {
    const arr = new Array(26).fill(0);
    let max = [Infinity, -Infinity];
    for (let i = 0; i < str.length; i++) {
        const charIdx = str[i].charCodeAt() - 97;
        arr[charIdx]++;
        if (charIdx <= max[0]) {
            max = [charIdx, arr[charIdx]];
        }
        
    }
    return max[1];
}