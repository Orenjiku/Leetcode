/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let maxArea= 0;
    while (i < j) {
        const width = j - i;
        const minHeight = Math.min(height[i], height[j]);
        maxArea = Math.max(maxArea, minHeight * width);
        height[i] <= height[j] ? i++ : j--;
    }
    return maxArea;
};