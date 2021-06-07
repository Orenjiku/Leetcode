/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let count = 1;
    let curS = s[0];
    let maxCount = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === curS) {
            count++;
            maxCount = Math.max(count, maxCount)  
        } else {
            count = 1;
            curS = s[i];
        }
    }
    return maxCount;
};