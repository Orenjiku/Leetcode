/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {')': '(', '}': '{', ']': '['}
    for (const c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else if (pairs[c] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0 ? true : false
};