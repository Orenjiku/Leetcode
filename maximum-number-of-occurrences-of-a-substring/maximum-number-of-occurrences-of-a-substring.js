/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let maxCount = 0;
    let foundPatterns = new Set()
    for (let i = 0; i < s.length - minSize + 1; i++) {
        const pattern = s.slice(i, i + minSize);
        const characterSet = pattern.split('').reduce((acc, cur) => acc.add(cur), new Set());
        if (!foundPatterns.has(pattern) && characterSet.size <= maxLetters) {
            foundPatterns.add(pattern);
            const patternArr = s.match(new RegExp(`(?=${pattern})`, 'g')) || 0;
            maxCount = Math.max(maxCount, patternArr.length);
        }
    }
    return maxCount;
};