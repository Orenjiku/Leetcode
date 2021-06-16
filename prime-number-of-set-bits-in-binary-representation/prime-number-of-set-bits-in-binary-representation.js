/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0;
    const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    for (let i = left; i <= right; i++) {
        const binary = i.toString(2);
        const setBits = binary.match(/1/g).length;
        if (primeSet.has(setBits)) count++;
    }
    return count;
};