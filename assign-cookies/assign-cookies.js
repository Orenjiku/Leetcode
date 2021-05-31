/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < g.length; j++) {
            if (g[j] > 0 && s[i] >= g[j]) {
                g[j] = -g[j];
                break;
            }
        }
    }
    return g.reduce((acc, cur) => acc += cur < 0 ? 1 : 0, 0)
};