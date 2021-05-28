/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let curLetter = name[0];
    let count = 0;
    let i = 0;
    let j = 0;
    while (i <= name.length) {
        if (curLetter === name[i]) {
            count++;
            i++;
        } else {
            while (typed[j] === curLetter && j < typed.length) {
                count--;
                j++;
            }
            if (count > 0 || (i === name.length && j < typed.length)) return false;
            curLetter = name[i];
            count = 0;
        }
    }
    return true;
};