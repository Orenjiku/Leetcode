/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    const left = binarySearch(nums, target, 'left');
    const right = binarySearch(nums, target, 'right');
    return [left, right]
};

const binarySearch = (nums, target, dir) => {
    let left = 0;
    let right = nums.length - 1;
    let idx = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left++;
        } else if (nums[mid] > target) {
            right--;
        } else {
            idx = mid;
            if (dir === 'left') right = mid - 1;
            if (dir === 'right') left = mid + 1;
        }
    }
    return idx
}