/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            absent++;
            if (absent === 2) return false;
        } else if (s[i] === 'L') {
            if (s.slice(i, i + 3) === 'LLL') return false;
        }
    }
    return true;
};