/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const map = pieces.reduce((acc, cur, i) => {
        acc[cur[0]] = i;
        return acc;
    }, {})
    
    const idxArr = [];
    arr.forEach(num => {
        if (map.hasOwnProperty(num)) {
            idxArr.push(map[num])
        }
    });
    
    const answer = idxArr.map(i => pieces[i]).reduce((acc, cur) => {
        acc = acc.concat(cur);
        return acc;
    }, [])
    return arr.join('') === answer.join('');
};