/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    function Node(val) {
        this.neighs = new Set()
        this.visited = false
    }
    Node.table = new Array(n)
    
    for (let i = 0; i < n; i++) {
        Node.table[i] = new Node(i)
    }
    
    for (const edge of edges.values()) {
        const [fromVal, toVal] = edge
        const fromNode = Node.table[fromVal]
        const toNode = Node.table[toVal]
        fromNode.neighs.add(toNode)
        toNode.neighs.add(fromNode)
    }
    
    
    const startNode = Node.table[start]
    const endNode = Node.table[end]
    function canReach(node) {
        node.visited = true
        if (node === endNode)   return true
        
        for (const neigh of node.neighs.values()) {
            if (!neigh.visited) {
                if (canReach(neigh)) {
                    return true
                }
            }
        }
        
        return false
    }
    
    
    let result = canReach(startNode)
    return result
};