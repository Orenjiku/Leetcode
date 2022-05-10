/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p2 = n - 1;
    let p1 = nums1.length - n - 1;
    if (m === 0) nums1[0] = nums2[0];
    if (n === 0) return nums1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (nums1[p1] >= nums2[p2]) {
            [nums1[p1], nums1[i]] = [nums1[i], nums1[p1]];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--
            if (p2 < 0) break;
        }
    }
    return nums1;
};