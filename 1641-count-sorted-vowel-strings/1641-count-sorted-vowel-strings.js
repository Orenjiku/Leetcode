/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const result = {total: 0}
    helper(0, ['a', 'e', 'i', 'o', 'u'], n, 0, result);
    return result.total;
};

const helper = (idx, arr, n, count, result) => {
    if (count === n) {
        result.total++
        return;
    }
    for (let i = idx; i < arr.length; i++) {
        helper(i, arr, n, count + 1, result);
    }
    return result;
}