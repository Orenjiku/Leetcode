/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1 && trust.length === 0) return 1;
    const map = {};
    for (let i = 0; i < trust.length; i++) {
        if (!map.hasOwnProperty(trust[i][0])) map[trust[i][0]] = [new Set(), new Set()];    
        if (!map.hasOwnProperty(trust[i][1])) map[trust[i][1]] = [new Set(), new Set()];
        map[trust[i][0]][1].add(trust[i][1]);
        map[trust[i][1]][0].add(trust[i][0]);
    }
    return Object.keys(map).reduce((acc, cur) => map[cur][0].size === n - 1 && map[cur][1].size === 0 ? cur : acc, -1)
};