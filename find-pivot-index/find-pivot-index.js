/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum1 = 0;
    let sum2 = 0;
    const sumArr1 = nums.map(num => {
        sum1 += num;
        num += sum1 - num;
        return num;
    });
    const sumArr2 = nums.reverse().map(num => {
        sum2 += num;
        num += sum2 - num;
        return num;
    }).reverse();
    
    for (let i = 0; i < sumArr1.length; i++) {
        const left = sumArr1[i - 1] ? sumArr1[i - 1] : 0;
        const right = sumArr2[i + 1] ? sumArr2[i + 1] : 0;
        if (sumArr1[i] === sumArr2[i] && left === right) {
            return i;
        }
    }
    
    return -1;
};