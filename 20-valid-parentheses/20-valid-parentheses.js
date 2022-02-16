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
        } else {
            const prevC = stack.pop();
            if (prevC !== pairs[c]) return false;
        }
    }
    return stack.length === 0;
};