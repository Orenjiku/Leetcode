/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const matrix = Array.from(new Array(img.length), () => new Array(img[0].length).fill(0));
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[i].length; j++) {
            let count = 1;
            let total = img[i][j];
            if (/[0-9]/.test(img[i - 1]?.[j - 1])) {
                count++;
                total += img[i - 1][j - 1];
            }
            if (/[0-9]/.test(img[i - 1]?.[j])) {
                count++;
                total += img[i - 1][j];
            }
            if (/[0-9]/.test(img[i - 1]?.[j + 1])) {
                count++;
                total += img[i - 1][j + 1];
            }
            if (/[0-9]/.test(img[i]?.[j - 1])) {
                count++;
                total += img[i][j - 1];
            }
            if (/[0-9]/.test(img[i]?.[j + 1])) {
                count++;
                total += img[i][j + 1];
            }
            if (/[0-9]/.test(img[i + 1]?.[j - 1])) {
                count++;
                total += img[i + 1][j - 1];
            }
            if (/[0-9]/.test(img[i + 1]?.[j])) {
                count++;
                total += img[i + 1][j];
            }
            if (/[0-9]/.test(img[i + 1]?.[j + 1])) {
                count++;
                total += img[i + 1][j + 1];
            }
            matrix[i][j] = Math.floor(total / count);
        }
    }
    return matrix;
};