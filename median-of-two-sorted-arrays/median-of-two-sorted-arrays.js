/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums3 = [...nums1, ...nums2].sort((a, b) => a - b);
    let left = 0;
    let right = nums3.length - 1;
    while (left <= right) {
        if (left === right - 1) return ((nums3[left] + nums3[right]) / 2).toFixed(5);
        if (left === right) return nums3[left].toFixed(5);
        left++;
        right--;
    }
};