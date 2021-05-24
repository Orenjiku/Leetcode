/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const total = arr.reduce((acc, cur) => acc += cur);
    let curTotal = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        curTotal += arr[i];
        if (curTotal === total / 3) {
            curTotal = 0;
            count++;
        }
    }
    return count >= 3 ? true : false;
};