/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length === k) return '0';
    let stack = [num[0]];
    for (let i = 1; i < num.length; i++) {
        while (num[i] < stack[stack.length - 1] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    return stack.length > 0 ? stack.join('').replace(/^0+(?=\d+)/, '') : '0'
};