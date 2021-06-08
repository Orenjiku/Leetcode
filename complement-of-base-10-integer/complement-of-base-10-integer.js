/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let binary = '';
    do {
        binary = n % 2 + binary;
        n = Math.floor(n / 2);
    } while (n > 0)
    const complementBinary = binary.split('').map(numStr => numStr === '0' ? '1' : '0').join('');
    return parseInt(complementBinary, 2);
};