/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const map = {};
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] === '1') map[i] = i;
    }
    let result = [];
    for (let i = 0; i < boxes.length; i++) {
        let sum = 0;
        for (let idx in map) {
            if (i < idx) {
                sum += map[idx];
                map[idx]--;
            } else if (i > idx) {
                map[idx]++;
                sum += map[idx];
            }
        }
        result.push(sum);
    }
    return result;
};