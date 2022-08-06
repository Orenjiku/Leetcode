/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = [];
    dfs(0,  new Set(), result, graph);
    return result;
};

const dfs = (u, visited, result, graph) => {
    visited.add(u);
    if (u === graph.length - 1) result.push([...visited]);
    for (let v of graph[u]) {
        dfs(v, visited, result, graph);
    }
    visited.delete(u);
}