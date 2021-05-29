/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    return 1 === (s.match(/1+/g) || []).length;
};