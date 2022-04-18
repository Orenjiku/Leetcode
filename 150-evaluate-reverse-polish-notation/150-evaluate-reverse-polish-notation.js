/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (const char of tokens) {
        if (char !== '+' && char !== '-' && char !== '*' && char !== '/') {
            stack.push(Number(char));
        } else {
            const secondNum = stack.pop();
            const firstNum = stack.pop();
            let result;
            if (char === '+') {
                result = firstNum + secondNum
            } else if (char === '-') {
                result = firstNum - secondNum;
            } else if (char === '*') {
                result = firstNum * secondNum;
            } else if (char === '/') {
                result = firstNum / secondNum;
                if (result > 0) {
                    result = Math.floor(result);
                } else {
                    result = Math.ceil(result);
                }
            }
            stack.push(result)
        }
    }
    return stack[0];
};