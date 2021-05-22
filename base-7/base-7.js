/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return '0';
    let hepta = '';
    num = num.toString().split('');
    let negative = false;
    if (num[0] === '-') {
        negative = true;
        num.shift();
    }
    num = parseInt(num.join(''), 10);
    while (num > 0) {
        hepta = num % 7 + hepta;
        num = Math.floor(num / 7);
    }
    if (negative) {
        hepta *= -1;
    }
    return hepta.toString();
};