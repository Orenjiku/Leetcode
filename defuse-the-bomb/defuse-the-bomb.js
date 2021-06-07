/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if (k === 0) return new Array(code.length).fill(0);
    const result = [];
    for (let i = 0; i < code.length; i++) {
        let sum = 0;
        if (k > 0) {
            for (let j = i + 1; j < i + 1 + Math.abs(k); j++) {
                sum += code[j % code.length];
            }
        } else if (k < 0) {
            let j = i - 1;
            for (let m = 0; m < Math.abs(k); m++) {
                sum += j >= 0 ? code[j] : code[(code.length + j) % code.length];
                j--;
            }
        }
        result.push(sum);
    }
    return result;
};