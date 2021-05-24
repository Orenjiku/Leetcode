/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1;
    
    while (i >= 0 && j >= 0) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        
        if (num1 < num2) {
            nums1[k] = num2;
            k--;
            j--;
        }
        else {
            nums1[k] = num1;
            k--;
            i--;
        }    
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};