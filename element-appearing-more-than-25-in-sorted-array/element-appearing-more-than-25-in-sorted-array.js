/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count = 0;
    let curInt = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === curInt) {
            count += 1;
            if (count / arr.length > 0.25) return arr[i];
        } else {
            curInt = arr[i];
            count = 1;
        }
    }
};