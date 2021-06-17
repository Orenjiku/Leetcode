/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const result = [1, 0];
    let lineCount = 0;
    for (let i = 0; i < s.length; i++) {
        const width = widths[s[i].charCodeAt() - 97]
        lineCount += width;
        if (lineCount > 100) {
            result[0]++;
            lineCount = width;
        }
        if (i === s.length - 1) result[1] = lineCount;
    }
    return result;
};