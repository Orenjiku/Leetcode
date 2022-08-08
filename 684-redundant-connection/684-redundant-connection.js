/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const adjMap = {};
    let redundantEdge = null;
    
    for (const [u, v] of edges) {
        const visited = new Set();
        if (dfs(u, v, visited, adjMap)) redundantEdge = [u, v];
        
        if (!(u in adjMap)) adjMap[u] = new Set();
        if (!(v in adjMap)) adjMap[v] = new Set();
        
        adjMap[u].add(v);
        adjMap[v].add(u);
    }
    
    return redundantEdge;
};

const dfs = (u, v, visited, adjMap) => {
    if (!(u in adjMap)) return false;
    if (visited.has(v)) return true;
    visited.add(u);
    for (const w of adjMap[u]) {
        if (visited.has(w)) continue
        visited.add(w);
        if (dfs(w, v, visited, adjMap)) return true;
    }
    return false;
}