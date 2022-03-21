/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let res = 0;
    let maxSum = values[0];
    
    for (let j = 1; j < values.length; j++) {
        const currNum = values[j];
        
        res = Math.max(res, maxSum + currNum - j);
        maxSum = Math.max(maxSum, currNum + j);
    }
    
    return res;
};