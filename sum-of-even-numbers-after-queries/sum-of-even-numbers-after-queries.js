/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const answer = new Array(nums.length).fill(0);
    for (let [i, query] of queries.entries()) {
        nums[query[1]] += query[0];
        answer[i] = nums.reduce((acc, cur) => {
            acc += cur % 2 === 0 ? cur : 0;
            return acc;
        }, 0)
    }
    return answer;
};