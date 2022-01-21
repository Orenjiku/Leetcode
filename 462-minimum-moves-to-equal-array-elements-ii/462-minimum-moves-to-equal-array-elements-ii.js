/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    const dp = new Array(nums.length).fill(0);
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < dp.length; j++) {
            const num = nums[i];
            const colNum = nums[j];
            if (colNum < num) {
                dp[j] = dp[j] + num - colNum;
            } else {
                dp[j] = dp[j] + colNum - num;
            }
        }
    }
    return Math.min(...dp);
};

// using median trick
// var minMoves2 = function(nums) {
// 	   nums.sort((a,b)=>a-b);
//     const mid = Math.floor(nums.length/2);
//     const median = nums[mid];
//     let counter = 0;
//     for(let i=0;i<nums.length;i++){
//         const number = nums[i];
//         const dif = Math.abs(number-median);
//         counter = counter + dif
//     }
//     return counter
// };