/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let targetCode = target.charCodeAt();
    let minCode = Infinity;
    let wrappedMinCode = Infinity;
    letters.forEach(letter => {
        const letterCharCode = letter.charCodeAt();
        if (letterCharCode > targetCode && letterCharCode < minCode) {
            minCode = letterCharCode;
        }
        wrappedMinCode = Math.min(wrappedMinCode, letterCharCode);
    })
    return (minCode !== Infinity) ? String.fromCharCode(minCode) : String.fromCharCode(wrappedMinCode)
};