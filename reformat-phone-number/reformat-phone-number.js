/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const nums = number.match(/\d/g).join('');
    let result = '';
    let remaining = nums.length;
    let i = 0;
    while (i < nums.length) {
        if (i % 3 === 0 && i !== 0 && remaining !== 0) result += '-';
        if (remaining === 4) {
            result += nums.slice(i, i + 2) + '-' + nums.slice(i + 2, i + 4);
            break;
        } else if (remaining === 2) {
            result += nums.slice(i, i + 2);
            break
        }
        result += nums.slice(i, i + 3);
        remaining -= 3;
        i += 3
    }
    return result;
};