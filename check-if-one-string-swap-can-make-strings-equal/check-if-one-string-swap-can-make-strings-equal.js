/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    
    let count = 0;
    const diff = {};
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i] && count === 0) {
            diff[s1[i]] = s2[i];
            count++;
        } else if (s1[i] !== s2[i] && count === 1) {
            if (diff[s2[i]] !== s1[i]) return false;
            count++;
        } else if (s1[i] !== s2[i]) {
            count++;
            if (count > 2) return false;
        }
    }
    return count === 2;
};