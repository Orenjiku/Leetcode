/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let arrangements = {};
    for (let i = 0; i < strs.length; i++) {
        const arr = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            arr[strs[i][j].charCodeAt() - 97]++;
        }
        
        const strArr = arr.join('-')
        if (!(strArr in arrangements)) arrangements[strArr] = [];
        arrangements[strArr].push(strs[i]);
    }
    return Object.values(arrangements);
};