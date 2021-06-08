/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    return [...nums.join('').matchAll(/1/g)].map(num => num.index).reduce((acc, cur, i, arr) => {
        if (arr[i - 1] === undefined) return true;
        else return cur - arr[i - 1] - 1 < k ? false : acc;
    }, true);
};