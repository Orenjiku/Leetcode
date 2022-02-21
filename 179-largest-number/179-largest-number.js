/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        return strA + strB > strB + strA ? -1 : 1;
    })
    return Number(nums.join('')) === 0 ? '0' : nums.join('');
};