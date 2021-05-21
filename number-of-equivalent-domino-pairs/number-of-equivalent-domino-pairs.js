/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const map = {};
    for (let i = 0; i < dominoes.length; i++) {
        const dominoStr = `${Math.min(...dominoes[i])}${Math.max(...dominoes[i])}`;
        if (!map[dominoStr]) map[dominoStr] = [0, 0];
        map[dominoStr][0]++
        map[dominoStr][1] = map[dominoStr][0] - 1 + map[dominoStr][1];
    }
    return Object.values(map).reduce((acc, cur) => acc += cur[1], 0);
};