/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {

	function dfs(sum, memo){
		if(sum === target) return 1;
		if(sum in memo) return memo[sum];

		let result = 0
		for (let num of nums){
			if (sum <= target)  result += dfs(sum + num, memo)
		}
        
		memo[sum] = result;
		return result
	}

	return dfs(0, {})
};