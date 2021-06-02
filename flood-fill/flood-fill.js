/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const traverse = (row, col, image, set, color, newColor) => {
        if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || set.has(`${row}${col}`) || image[row][col] !== color) return;
        image[row][col] = newColor;
        set.add(`${row}${col}`);
        traverse(row + 1, col, image, set, color, newColor);
        traverse(row, col + 1, image, set, color, newColor);
        traverse(row - 1, col, image, set, color, newColor);
        traverse(row, col - 1, image, set, color, newColor);
        
    }
    traverse(sr, sc, image, new Set(), image[sr][sc], newColor);
    return image;
};