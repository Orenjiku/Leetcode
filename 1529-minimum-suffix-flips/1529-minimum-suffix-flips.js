/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
  let ans = 0
  let flip = 0;
  for (let i = 0; i < target.length; i++) {
    if ((target[i] === '1' && flip === 0) || (target[i] === '0' && flip === 1)) {
      ans += 1;
      flip = flip === 0 ? 1 : 0;
    }
  }
  return ans;
};