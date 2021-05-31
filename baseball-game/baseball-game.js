/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const arr = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        } else if (ops[i] === 'D') {
            arr.push(arr[arr.length - 1] * 2);
        } else if (ops[i] === 'C') {
            arr.pop();
        } else {
            arr.push(Number(ops[i]));
        }
    }
    return arr.reduce((acc, cur) => acc + cur, 0);
};