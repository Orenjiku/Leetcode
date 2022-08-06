/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = [];
    dfs(0, [0], result, graph);
    return result;
};

const dfs = (u, path, result, graph) => {
    if (path[path.length - 1] === graph.length - 1) {
        result.push(path);
        return;
    }
    
    for (const v of graph[u]) {
        dfs(v, [...path, v], result, graph);
    }
}