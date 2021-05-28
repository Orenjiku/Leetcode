/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length <= 1) return false;
    const map = {};
    deck.forEach(num => map[num] = (map[num] || 0) + 1);
    const arr = Object.values(map);
    if (arr.length === 1) return true;
    const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b);
    let gcd = getGCD(arr[0], arr[1]);
    for (let i = 1; i < arr.length; i++) {
        gcd = getGCD(gcd, arr[i]);
    }
    return gcd !== 1;
};