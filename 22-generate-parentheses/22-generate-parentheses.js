/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    traverse(n, n, '', result);
    return result;
};

const traverse = (leftCount, rightCount, string, result) => {
    if (leftCount < 0 || rightCount < leftCount) return;
    if (leftCount === 0 && rightCount === 0) {
        result.push(string);
        return;
    }
    traverse(leftCount - 1, rightCount, string + '(', result);
    traverse(leftCount, rightCount - 1, string + ')', result);
}