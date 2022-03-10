/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let currMax = nums[0];
  let currMin = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tempMax = currMax;

    currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
    currMin = Math.min(nums[i], nums[i] * currMin, nums[i] * tempMax);
    res = Math.max(res, currMax);
  }

  return res;
};