/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const parent = Array.from(new Array(isConnected.length), (_, i) => i);
    const rank = parent.map(v => 0);

    let count = isConnected.length;
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j] === 1) count -= union(i, j, parent, rank);
        }
    }
    
    return count;
    // return parent.filter((v, i) => v === i).length;
};

const union = (c1, c2, parent, rank) => {
    const p1 = find(c1, parent);
    const p2 = find(c2, parent);
    if (p1 === p2) return 0;
    if (rank[p1] < rank[p2]) {
        parent[p1] = p2;
    } else if (rank[p2] < rank[p1]) {
        parent[p2] = p1;
    } else {
        parent[p1] = p2;
        rank[p2]++;
    }
    return 1;
}

const find = (c, parent) => {
    if (parent[c] !== c) parent[c] = find(parent[c], parent);
    return parent[c];
}