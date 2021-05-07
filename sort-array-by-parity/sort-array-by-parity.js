/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const result = [];
    A.forEach(num => {
        if (num % 2 === 0) {
            result.unshift(num);
        } else {
            result.push(num)
        }
    });
    return result;
};