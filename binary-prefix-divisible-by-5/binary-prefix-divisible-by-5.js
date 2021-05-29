/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const answer = [];
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num = num * 2 + nums[i];
        answer.push(num % 5 === 0);
        num %= 5;
    }
    return answer;
};