/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = 0;
    let count = 0;
    while (count < arr.length) {
        for (let i = 0; i < arr.length - count; i++) {
            for (let j = i; j < i + 1 + count; j++) {
                total += arr[j];
            }
        }
        count += 2;
    }
    return total;
};