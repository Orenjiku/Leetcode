/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = t.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    for (let l of s) {
        if (map[l] > 0) map[l]--;
        if (map[l] === 0) delete map[l]; 
    }

    return Object.keys(map)[0];
};