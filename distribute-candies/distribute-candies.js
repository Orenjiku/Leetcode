/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const map = candyType.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})
    
    return Math.min(candyType.length / 2, Object.keys(map).length);
};