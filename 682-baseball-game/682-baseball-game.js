/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const scores = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        } else if (ops[i] === 'D') {
            scores.push(scores[scores.length - 1] * 2);
        } else if (ops[i] === 'C') {
            scores.pop();
        } else {
            scores.push(Number(ops[i]));
        }
    }
    return scores.reduce((acc, cur) => acc + cur, 0);
};