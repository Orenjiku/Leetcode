/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const set = new Set([...candyType])
    return Math.min(candyType.length / 2, set.size);
};