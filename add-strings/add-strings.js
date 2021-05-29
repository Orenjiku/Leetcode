/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (Number(num1) < Number(num2)) return addStrings(num2, num1);
    let str = '';
    let carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        const num2Val = num2[i - (num1.length - num2.length)] ? Number(num2[i - (num1.length - num2.length)]) : 0;
        const num = Number(num1[i]) + num2Val + carry;
        if (num > 9) {
            str = (num - 10).toString() + str;
            carry = 1;
        } else {
            str = num.toString() + str;
            carry = 0;
        }
    }
    return carry === 1 ? carry.toString() + str : str;
};