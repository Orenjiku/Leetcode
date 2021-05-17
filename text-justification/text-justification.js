/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const output = [];
    const lines = [];
    let totalLetterCount = 0;
    let wordCount = 0;
    let start = 0;
    let end = 0;
    while (end < words.length) {
        wordCount++;
        let letterCount = (wordCount > 1) ? words[end].length + 1 : words[end].length;
        if (totalLetterCount + letterCount > maxWidth) {
            lines.push(words.slice(start, end));
            start = end;
            totalLetterCount = 0;
            wordCount = 0;
        } else if (end === words.length - 1) {
            lines.push(words.slice(start, words.length));
            end++;
        } else {
            totalLetterCount += letterCount;
            end++
        }
    }

    for (let i = 0; i < lines.length; i++) {
        let wordCount = lines[i].length;
        const letterCount = lines[i].reduce((acc, cur) => acc += cur.length, 0);
        let spaces = maxWidth - letterCount;
        if (wordCount === 1) {
            output.push(lines[i] + ' '.repeat(spaces));  
        } else if (i === lines.length - 1) {
            output.push(lines[i].join(' ') + ' '.repeat(spaces - (wordCount - 1)));
        } else {
            let str = '';
            for (let j = 0; j < lines[i].length; j++) {
                let addSpaces = (j !== lines[i].length - 1) ? Math.ceil(spaces / (wordCount - 1)) : 0;
                wordCount--;
                spaces -= addSpaces;
                str += lines[i][j] + ' '.repeat(addSpaces); 
            }
            output.push(str);
        }
    }
    return output;
};