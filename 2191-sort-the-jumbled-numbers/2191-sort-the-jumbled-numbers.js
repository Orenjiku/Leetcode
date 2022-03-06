/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const mappedArr = [];
    for (let i = 0; i < nums.length; i++) {
        const numArr = nums[i].toString().split('');
        const mappedNum = parseInt(numArr.map(num => mapping[num]).join(''));
        mappedArr.push([nums[i], mappedNum]);
    }
    mappedArr.sort((a, b) => a[1] - b[1]);
    return mappedArr.map(tuple => tuple[0]);
};