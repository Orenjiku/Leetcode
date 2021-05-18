/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let i = 0;
    let carryOver = 0;
    while (k > 0 || carryOver > 0) {
        const addNum = k % 10;
        const numIdx = num.length - 1 - i;
        const total = num[numIdx] + addNum + carryOver;
        if (numIdx < 0) num.unshift(addNum + carryOver);
        if (total > 9) {
            num[numIdx] = total % 10;
            carryOver = Math.floor(total / 10);
        } else {
            num[numIdx] = total;
            carryOver = 0;
        }
        if (numIdx === 0 && carryOver > 0) {
            num.unshift(carryOver);
            carryOver = 0;
        }
        i++;
        k = Math.floor(k / 10);
    }
    return num;
};