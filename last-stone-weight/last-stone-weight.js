/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    while (stones.length > 1) {
        if (stones[stones.length - 2] === stones[stones.length - 1]) {
            stones.splice(stones.length - 2, 2);
        } else if (stones[stones.length - 2] < stones[stones.length - 1]) {
            stones.splice(stones.length - 2, 2, stones[stones.length - 1] - stones[stones.length - 2]);
            stones.sort((a, b) => a - b);
        }
    }
    return stones[0] ? stones[0] : 0;
};