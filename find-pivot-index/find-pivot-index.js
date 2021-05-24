/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0;
    const leftSum = nums.reduce((acc, cur, i) => {
        total += cur;
        acc[i - 1] === undefined ? acc.push(cur) : acc.push(cur + acc[acc.length - 1]);
        return acc;
    }, []);
    const rightSum = nums.reduce((acc, cur, i) => {
        if (i === 0) {
            acc.push(total);
        } else {
            acc.push(total - nums[i - 1]);
            total -= nums[i - 1];
        }
        return acc;
    }, []);
    
    for (let i = 0; i < leftSum.length; i++) {
        if (leftSum[i] === rightSum[i]) return i;
    }
    return -1;
};