/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    for (let i = 0; i < arr.length; i++) {
        const pattern = arr.slice(i, i + m).join('');
        let count = 1;
        let j = i + m;
        while (true) {
            const nextPattern = arr.slice(j, j + m).join('');
            if (pattern === nextPattern) count++;
            else break;
            if (count === k) return true;
            j += m;
        }
    }
    return false;
};