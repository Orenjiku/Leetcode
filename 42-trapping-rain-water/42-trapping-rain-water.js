/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = height[0];
    let rightMax = height[height.length - 1];
    let total = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        if (leftMax <= rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            total += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            total += rightMax - height[right];
        }
    }
    return total;
};