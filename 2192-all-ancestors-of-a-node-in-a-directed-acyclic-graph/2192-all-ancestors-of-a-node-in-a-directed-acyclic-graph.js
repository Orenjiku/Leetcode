/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const adjList = edges.reduce((acc, cur) => {
        const [u, v] = cur;
        acc[u].push(v);
        return acc;
    }, Array.from(new Array(n), () => []));
    
    const inDegrees = new Array(n).fill(0);
    for (const [u, v] of edges) {
        inDegrees[v]++;
    }
    
    const queue = inDegrees.reduce((acc, _, i) => {
        if (inDegrees[i] === 0) {
            acc.push(i);
        }
        return acc;
    }, []);
    
    const result = Array.from(new Array(n), () => new Set())
    
    while (queue.length > 0) {
        const u = queue.shift();
        for (const v of adjList[u]) {
            inDegrees[v]--;
            if (inDegrees[v] === 0) queue.push(v);
            result[v].add(u);
            result[u].forEach(node => result[v].add(node));
        }
    }

    for (let i = 0; i < n; ++i) {
        result[i] = [...result[i]].sort((a, b) => a - b);
    }
    
    return result;
};