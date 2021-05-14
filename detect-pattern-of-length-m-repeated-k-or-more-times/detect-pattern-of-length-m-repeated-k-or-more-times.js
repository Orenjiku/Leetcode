/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    for (let i = 0; i < arr.length - m; i++) {
        const pattern = arr.slice(i, i + m).join('');
        let count = 1;
        let j = i + m;
        while (arr.slice(j, j + m).join('') === pattern) {
            count++;
            if (count >= k) return true;
            j += m;
        }
    }
    return false;
};