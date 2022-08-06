/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const visited = new Set();
    const result = [];
    dfs(0, visited, result, graph);
    return result;
};

const dfs = (u, visited, result, graph) => {
    visited.add(u);
    for (let v of graph[u]) {
        if (visited.has(v)) continue;
        dfs(v, visited, result, graph);
    }
    if (u === graph.length - 1) result.push([...visited]);
    visited.delete(u);
}