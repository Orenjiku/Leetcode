/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
  let ans = 0
  let cur = 0;
  for (let i = 0; i < target.length; i++) {
    if ((target[i] === '1' && cur === 0) || (target[i] === '0' && cur === 1)) {
      ans += 1;
      cur = cur === 0 ? 1 : 0;
    }
  }
  return ans;
};