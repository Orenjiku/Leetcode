/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const sMap = s.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    const tMap = {};
    for (const c of t) {
        if (c in sMap && sMap[c] > 0) {
            sMap[c]--;
        } else {
            tMap[c] = (tMap[c] || 0) + 1;
        }
    }
    return Object.values(sMap).reduce((acc, cur) => acc + cur, 0) + Object.values(tMap).reduce((acc, cur) => acc + cur, 0);
};