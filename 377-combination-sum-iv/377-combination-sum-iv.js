/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
	const memo = {};

	function combs(remain){
		if(remain === 0) return 1
		if(remain in memo) return memo[remain];

		let result = 0
		for(let num of nums){
			if(remain >= 0)  result += combs(remain - num)
		}
		memo[remain] = result;
		return result
	}

	return combs(target)
};