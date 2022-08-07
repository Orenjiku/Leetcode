/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const parent = Array.from({length: n}, (_, i) => i);
    const rank = new Array(n).fill(0);
    for (const [u, v] of edges) {
        union(u, v, parent, rank);
    }
    return find(source, parent) === find(destination, parent);
};

const union = (c1, c2, parent, rank) => {
    const p1 = find(c1, parent);
    const p2 = find(c2, parent);
    if (p1 === p2) return;
    if (rank[p1] < rank[p2]) {
        parent[p1] = p2;
    } else if (rank[p1] > rank[p2]) {
        parent[p2] = p1;
    } else {
        parent[p1] = p2;
        rank[p2]++;
    }
}

const find = (c, parent) => {
    if (parent[c] !== c) parent[c] = find(parent[c], parent);
    return parent[c];
}