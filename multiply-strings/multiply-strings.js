/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let zeroes = '';
    const sums = [];
    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0;
        let str = '' + zeroes;
        for (let j = num1.length - 1; j >= 0; j--) {
            const num = Number(num2[i]) * Number(num1[j]) + carry;
            str = (num % 10).toString() + str;
            carry = Math.floor(num / 10);
        }
        carry > 0 ? sums.push((carry.toString() + str).split('')) : sums.push(str.split(''));
        zeroes += '0';
    }

    const maxLen = sums.reduce((acc, cur) => Math.max(acc, cur.length), 0);
    let carry = 0;
    let str = '';
    for (let i = 0; i < maxLen; i++) {
        let total = 0;
        for (let j = 0; j < sums.length; j++) {
            total += sums[j].length === 0 ? 0 : Number(sums[j].pop());
        }
        total += carry;
        str = (total % 10).toString() + str;
        carry = Math.floor(total / 10);
    }
    return carry > 0 ? carry.toString() + str : str.replace(/^0+(?=0$)/, '');
}