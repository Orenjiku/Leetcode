/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = arr[arr.length - 1];
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) arr[i] = -1;
        else {
            temp = arr[i];
            arr[i] = max;
            max = Math.max(max, temp);
        }
    }
    return arr;
};