/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = {};
    nums1.forEach(num => map[num] = false);
    nums2.forEach(num => {
        if (map[num] === false) map[num] = true;
    });
    return Object.keys(map).filter(key => {
        return map[key] === true;
    })
};