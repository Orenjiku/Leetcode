/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    if (n === 1) return 1;
    const nums = new Array(n).fill(0);
    let notPrime = 1;
    for (let i = 2; i * i <= n; i++) {
        for (let j = i * i; j <= n; j += i) {
            if (nums[j - 1] !== 1) notPrime++;
            nums[j - 1] = 1;
        }
    }
    let prime = n - notPrime;
    const factorialMap = {};
    let product = 1n;
    for (let i = 1; i <= Math.max(notPrime, prime); i++) {
        product = (product * BigInt(i)) % BigInt(10 ** 9 + 7);
        factorialMap[i] = product;
    }
    return notPrime > prime ? (product * factorialMap[prime]) % BigInt(10 ** 9 + 7) : (product * factorialMap[notPrime]) % BigInt(10 ** 9 + 7);
}