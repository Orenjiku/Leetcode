/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 0;
	let pattern = word;
    while(sequence.includes(pattern)) {
        pattern += word;
      	count++
    }
    return count
};