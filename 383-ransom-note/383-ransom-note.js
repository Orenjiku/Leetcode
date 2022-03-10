/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    return ransomNote.split('').reduce((acc, cur) => {
        const len = magazine.length;
        magazine = magazine.replace(cur, '');
        return magazine.length === len ? false : acc;
    }, true)
};