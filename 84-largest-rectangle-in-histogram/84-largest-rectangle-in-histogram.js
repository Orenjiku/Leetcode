/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            const [idx, height] = stack.pop();
            const startingIdx = stack[stack.length - 1] ? stack[stack.length - 1][0] : -1;
            maxArea = Math.max(maxArea, (i - 1 - startingIdx) * height);
        }
        stack.push([i, heights[i]]);
    }

    while (stack.length > 0) {
        const [idx, height] = stack.pop();
        const startingIdx = stack[stack.length - 1] ? stack[stack.length - 1][0] : -1;
        maxArea = Math.max(maxArea, (heights.length - 1 - startingIdx) * height);
    }
    return maxArea;
};