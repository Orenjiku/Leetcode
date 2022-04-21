/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;
    while (i < j) {
        const h = Math.min(height[i], height[j]);
        const w = j - i;
        maxArea = Math.max(maxArea, h * w);
        height[i] <= height[j] ? i++ : j--;
    }
    return maxArea;
};