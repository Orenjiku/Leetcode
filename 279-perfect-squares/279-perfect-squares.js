/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let minCount = Infinity;
    const traverse = (n, count) => {
        if (n === 0) {
            minCount = Math.min(minCount, count);
            return;
        }
        for (let i = n; i >= 0; i--) {
            if (isPerfectSquare(i)) {
                const remainder = n % i;
                const addCount = Math.floor(n / i);
                traverse(remainder, count + addCount);
            }
        }
    }
    traverse(n, 0);
    return minCount;
};

const isPerfectSquare = (n) => {
    return Math.floor(n ** (1 / 2)) * Math.floor(n ** (1 / 2)) === n;
}