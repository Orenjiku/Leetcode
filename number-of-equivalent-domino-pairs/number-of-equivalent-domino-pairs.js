/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const map = {};
    for (let i = 0; i < dominoes.length; i++) {
        const dominoStr = `${dominoes[i][0]}${dominoes[i][1]}`;
        const complementStr = `${dominoes[i][1]}${dominoes[i][0]}`;
        if (!map[dominoStr] && !map[complementStr]) {
            map[dominoStr] = [0, 0];
        }
        map[dominoStr] ? map[dominoStr][0]++ : map[complementStr][0]++;
        map[dominoStr] ? map[dominoStr][1] = map[dominoStr][0] - 1 + map[dominoStr][1] : map[complementStr][1] = map[complementStr][0] - 1 + map[complementStr][1];
    }
    return Object.values(map).reduce((acc, cur) => acc += cur[1], 0);
};