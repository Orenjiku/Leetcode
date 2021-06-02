/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (isGood(i)) count++;
    }
    return count;
};

const isGood = (n) => {
    if (/[347]/.test(n.toString())) return false;
    const str = n.toString();
    const arr = str.split('').map(num => {
        if (num === '2') return '5';
        else if (num === '5') return '2';
        else if (num === '6') return '9';
        else if (num === '9') return '6';
        else return num;
    });
    return str !== arr.join('');
}