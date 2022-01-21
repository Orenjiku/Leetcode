/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = t.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    let minStr = '';
    let minLen = Infinity;
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        const cLeft = s[i];
        while (j < s.length && !isValid(map)) {
            const cRight = s[j];
            if (cRight in map) map[cRight]--;
            j++;
        }
        if (isValid(map)) {
            const str = s.slice(i, j);
            if (str.length < minLen) {
                minLen = str.length;
                minStr = str;
            }   
        }
        if (cLeft in map) map[cLeft]++;
    }
    return minStr;
};

const isValid = (map) => {
    for (let letter in map) {
        if (map[letter] > 0) return false;
    }
     return true;
}