/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const fromCity = new Set();
    const toCity = new Set();
    paths.forEach(path => {
        toCity.has(path[0]) ? toCity.delete(path[0]) : fromCity.add(path[0]);
        fromCity.has(path[1]) ? fromCity.delete(path[1]) : toCity.add(path[1]);
    })
    return [...toCity][0];
};