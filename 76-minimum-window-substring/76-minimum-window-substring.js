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
    let i = 0;
    let j = 0;
    let count = Object.keys(map).length;
    while (j < s.length) {
        const cRight = s[j];
        if (cRight in map) map[cRight]--;
        if (map[cRight] === 0) count--;
        j++;
        
        while (count === 0) {
            const cLeft = s[i];
            const str = s.slice(i, j);
            if (str.length < minLen) {
                minLen = str.length;
                minStr = str;
            }
            if (cLeft in map) {
                if (map[cLeft] === 0) count++;
                map[cLeft]++;
            }
            i++
        }
    }
    return minStr;
};
