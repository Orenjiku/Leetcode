/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let i = 0;
    const wordLen = word.length
    let maxCount = 0;
    for (let i = 0; i < sequence.length; i++) {
        let j = i;
        let count = 0;
        while (sequence.slice(j, j + wordLen) === word) {
            count++;
            j = j + wordLen;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};