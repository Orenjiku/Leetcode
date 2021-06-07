/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let even = nums.reduce((acc, cur) => acc += cur % 2 === 0 ? cur : 0, 0);
    
    const answer = [];
    
    for (let i = 0; i < queries.length; i++) {
        const sum = nums[queries[i][1]] + queries[i][0];
        if (sum % 2 === 0) {
            even += nums[queries[i][1]] % 2 === 0 ? queries[i][0] : sum;
        } else if (nums[queries[i][1]] % 2 === 0) {
            even -= nums[queries[i][1]];
        }
        answer.push(even);
        nums[queries[i][1]] += queries[i][0];
    }
    return answer;
};