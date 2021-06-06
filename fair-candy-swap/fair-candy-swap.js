/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceTotal = aliceSizes.reduce((acc, cur) => acc + cur);
    const bobTotal = bobSizes.reduce((acc, cur) => acc + cur);
    const bobSet = new Set(bobSizes);
    for (let i = 0; i < aliceSizes.length; i++) {
        const bobCandy = (bobTotal - aliceTotal + 2 * aliceSizes[i]) / 2;
        if (bobSet.has(bobCandy)) return [aliceSizes[i], bobCandy];
    }
};