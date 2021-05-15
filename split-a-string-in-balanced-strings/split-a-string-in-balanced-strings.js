/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balancedCount = 0;
    let charL = 0;
    let charR = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? charL += 1 : charR += 1;
        if (charL === charR) {
            balancedCount++;
            charL = 0;
            charR = 0;
        }
    }
    return balancedCount;
};