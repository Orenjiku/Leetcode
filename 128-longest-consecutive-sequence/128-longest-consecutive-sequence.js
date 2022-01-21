/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i];
        if (!set.has(curNum - 1)) {
           let curCount = 1;
            
            while (set.has(curNum + 1)) {
                curNum++;
                curCount++;
            }
            count = Math.max(count, curCount);
        }
    }
    return count;
};