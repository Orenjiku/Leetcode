/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const pattern = arr.slice(i, i + m).join('');
        let count = 1;
        let flag = true;
        let j = i + m;
        while (flag === true) {
            const nextPattern = arr.slice(j, j + m).join('');
            pattern === nextPattern ? count++ : flag = false;
            j += m;
        }
        if (count === k) return true;
    }
    return false;
};