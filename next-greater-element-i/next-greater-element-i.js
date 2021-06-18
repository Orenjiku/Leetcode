/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = {};
    for (let i = 0; i < nums2.length; i++) {
        for (let j = i + 1; j <= nums2.length; j++) {
            if (nums2[i] < nums2[j]) {
                map[nums2[i]] = nums2[j];
                break;
            }
        }
        if (map[nums2[i]] === undefined) map[nums2[i]] = -1;
    }
    return nums1.map(num => map[num]);
};