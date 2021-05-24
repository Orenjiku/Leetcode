/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const compare1 = Array.from(new Array(s.length), (num, i) => i % 2 === 0 ? 1 : 0);
    const compare2 = Array.from(new Array(s.length), (num, i) => i % 2 === 0 ? 0 : 1);
    let min1 = 0;
    let min2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== compare1[i].toString()) min1++;
        if (s[i] !== compare2[i].toString()) min2++;
    }
    return Math.min(min1, min2);
};