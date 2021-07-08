/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    const combinationSet = new Set();
    const idxSet = new Set();
    const dfs = (perm, result, idxSet, str, combinationSet) => {
        if (perm.length === nums.length) {
            if (!(combinationSet.has(str))) {
                combinationSet.add(str);
                result.push([...perm]);
            }
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!(idxSet.has(i))) {
                perm.push(nums[i]);
                idxSet.add(i);
                dfs(perm, result, idxSet, str + nums[i] + '-', combinationSet);
                perm.pop();
                idxSet.delete(i);
            }
        }
    }
    
    dfs([], result, idxSet, '', combinationSet);
    
    return result;
};