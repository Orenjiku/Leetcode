/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const arr = [0, 0, 0];
    const map = {a: 0, b: 1, c: 2};
    let count = 0;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        arr[map[s[j]]]++;
        while (arr[0] >= 1 && arr[1] >= 1 && arr[2] >= 1) {
            count += s.length - j;
            arr[map[s[i]]]--;
            i++;
        }
    }
    return count;
};