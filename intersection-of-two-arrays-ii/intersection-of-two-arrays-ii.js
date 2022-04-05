/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) return intersect(nums2, nums1);
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            result.push(nums1[p1]);
            p1++;
            p2++;
        }
        while (nums1[p1] < nums2[p2]) {
            p1++;
        }
        while (nums1[p1] > nums2[p2]) {
            p2++;
        }
    }
    return result;
};