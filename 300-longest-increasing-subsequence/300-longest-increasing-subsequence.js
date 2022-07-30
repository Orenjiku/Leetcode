/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > result[result.length - 1]) {
            result.push(nums[i]);
        } else {
            result[binarySearch(nums[i], result)] = nums[i]
        }
    }
    return result.length;
};

const binarySearch = (target, array) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}