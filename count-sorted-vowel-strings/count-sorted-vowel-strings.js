/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let aCount = 1, eCount = 1, iCount = 1, oCount = 1, uCount = 1;
    for (let i = 1; i < n; i++) {
        eCount = aCount + eCount;
        iCount = eCount + iCount;
        oCount = iCount + oCount;
        uCount = oCount + uCount;
    }  
    return aCount + eCount + iCount + oCount + uCount;
};