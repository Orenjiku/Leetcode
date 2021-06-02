/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const map = pieces.reduce((acc, cur, i) => {
        acc[cur[0]] = cur;
        return acc;
    }, {})
    
    const answer = arr.reduce((acc, cur) => {
        if (map.hasOwnProperty(cur)) acc = acc.concat(map[cur]);
        return acc;
    }, [])

    return arr.reduce((acc, cur, i) => cur !== answer[i] ? false : acc, true)
};