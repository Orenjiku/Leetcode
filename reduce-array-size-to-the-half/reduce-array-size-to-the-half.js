/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    const len = Math.floor(arr.length / 2);
    const numArr = Object.keys(map).sort((a, b) => map[a] - map[b]);
    let minSum = Infinity;
    
    let i = 0;
    let curSum = 0;
    for (let j = 0; j < numArr.length; j++) {
        curSum += map[numArr[j]];
        while (curSum >= len) {
            if (j - i + 1 < minSum) minSum = j - i + 1;
            curSum -= map[numArr[i]];
            i++;
        }
    }
    return minSum;
};