/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const len = s.length;
    const sArr = s.split('');
    for (let i = 0; i < len; i++) {
        sArr.push(sArr.shift());
        if (sArr.join('') === goal) return true;
    }
    return s === goal;
};