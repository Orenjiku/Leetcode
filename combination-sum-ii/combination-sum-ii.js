/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    const map = {};
    const traverse = (start, arr, count) => {
        if (count > target) return;
        if (count === target) {
            const key = arr.join('-');
            if (!map[key]) {
                map[key] = true;
                result.push([...arr]);   
            }
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]);
            traverse(i + 1, arr, count + candidates[i]);
            arr.pop();
        }
    }
    traverse(0, [], 0)
    return result;
};
