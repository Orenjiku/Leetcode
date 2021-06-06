/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    return Math.max(...(s.match(/1+/g) || []).map(str => str.length)) > Math.max(...(s.match(/0+/g) || []).map(str => str.length));
};