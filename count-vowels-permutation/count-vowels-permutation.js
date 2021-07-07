/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
        let aCount = 1, eCount = 1, iCount = 1, oCount = 1, uCount = 1;
        let mod = 1000000007;

        for (let i = 1; i < n; i++) {
            let aCountNew = (eCount + iCount + uCount) % mod;
            let eCountNew = (aCount + iCount) % mod;
            let iCountNew = (eCount + oCount) % mod;
            let oCountNew = (iCount) % mod;
            let uCountNew = (iCount + oCount) % mod;
            aCount = aCountNew;
            eCount = eCountNew;
            iCount = iCountNew;
            oCount = oCountNew;
            uCount = uCountNew;
        }
        return (aCount + eCount + iCount + oCount + uCount)  % mod;
};