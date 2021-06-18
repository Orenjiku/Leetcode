/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let count = 0;
    const finalN = '0'.repeat(n.length)
    while (n !== finalN) {
        n = n.split('').map(str => Number(str) > 0 ? (Number(str) - 1).toString() : '0').join('');
        count++;
    }
    return count;
};