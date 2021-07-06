/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function(a, b) {
    const arrA = new Array(26).fill(0);
    const arrB = new Array(26).fill(0);
    
    for (let char of a) {
        arrA[char.charCodeAt() - 97]++;
    };
    
    for (let char of b) {
        arrB[char.charCodeAt() - 97]++;
    };

    let min = Infinity;
    for (let i = 0; i < 26; i++) {
        min = Math.min(min, (a.length - arrA[i]) + (b.length - arrB[i]));
        
        if (i > 0) {
            arrA[i] += arrA[i - 1];
            arrB[i] += arrB[i - 1];
        }

        if (i < 25) {
            min = Math.min(min, a.length - arrA[i] + arrB[i], b.length - arrB[i] + arrA[i]);
        }
    }
    return min;
};
