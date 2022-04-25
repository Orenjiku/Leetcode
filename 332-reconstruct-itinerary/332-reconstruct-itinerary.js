/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
   let graph = {}
   let res = []
   for (let [dep, des] of tickets) {
       if (!graph[dep]) graph[dep] = []
       graph[dep].push(des)
   }
    
    for (let dep in graph) {
        graph[dep].sort()
    }
    
    let dfs = (node) =>{
        let des = graph[node]
        while(des && des.length > 0) {
            dfs(des.shift())
        }
        res.unshift(node)
    }
    dfs("JFK")
    return res
};