/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
    if (a.length !== b.length) return false;
    let map = {};
    let repeat = {};
    let differences = 0;
    for (let i = 0; i < a.length; i++) {
        repeat[a[i]] = a[i] === b[i] && !repeat.hasOwnProperty(a[i]) ? false : true;
        if (a[i] !== b[i]) {
            differences++;
            if (differences === 1) map[a[i]] = b[i];
            if (differences === 2 && map[b[i]] !== a[i] || differences > 2) return false;   
        }
    }
    const isRepeat = Object.values(repeat).reduce((acc, cur) => cur === true ? true : acc, false);
    return differences === 2 || (isRepeat && differences === 0);
};