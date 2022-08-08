/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = Array.from(new Array(edges.length + 1), (_, i) => i);
    const rank = new Array(edges.length + 1).fill(0);
    for (const [u, v] of edges) {
        if (union(u, v, parent, rank)) return [u, v]
    }
    return [];
};

const union = (c1, c2, parent, rank) => {
    const p1 = find(c1, parent);
    const p2 = find(c2, parent);
    if (p1 === p2) return true;
    
    if (rank[p1] < rank[p2]) {
        parent[p1] = p2;
    } else if (rank[p2] < rank[p1]) {
        parent[p2] = p1;
    } else {
        parent[p1] = p2;
        rank[p2]++;
    }
    return false;
}

const find = (c, parent) => {
    if (parent[c] !== c) parent[c] = find(parent[c], parent);
    return parent[c];
}