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
        const setBits = binary.split('').reduce((acc, cur) => cur === '1' ? acc + 1 : acc, 0);
        if (primeSet.has(setBits)) count++;
    }
    return count;
};