/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    if (num.toString().length * 9 === num) return num;
    else return parseInt(num.toString().replace(/6/, 9));
};