/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            let newChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            while (newChar === arr[i - 1] || newChar === arr[i + 1]) {
                newChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            }
            arr[i] = newChar;
        }
    }
    return arr.join('');
};