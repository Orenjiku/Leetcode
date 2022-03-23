/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    let result = [];
    while (n > 0) {
        if (k - n >= 26) {
            result.push('z');
            k -= 26;
        } else {
            const num = k - n + 1;
            const letter = String.fromCharCode(96 + num);
            result.push(letter);
            k -= num;
        }
        n--;
    }
    return result.reverse().join('');
};