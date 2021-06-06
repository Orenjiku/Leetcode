/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceTotal = aliceSizes.reduce((acc, cur) => acc + cur);
    const bobTotal = bobSizes.reduce((acc, cur) => acc + cur);
    for (let i = 0; i < aliceSizes.length; i++) {
        for (let j = 0; j < bobSizes.length; j++) {
            if (aliceTotal - aliceSizes[i] + bobSizes[j] === bobTotal - bobSizes[j] + aliceSizes[i]) return [aliceSizes[i], bobSizes[j]];
        }
    }
};