/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isPalin = (left, right, count) => {
        if (count === 2) return false;
        let test1 = true;
        let test2 = true;
        while (left < right) {
            if (s[left] !== s[right]) {
                if (s[left + 1] === s[right] && count === 0) test1 = isPalin(left + 1, right, count + 1);
                else test1 = false;
                if (s[left] === s[right - 1] && count === 0) test2 = isPalin(left, right - 1, count + 1);
                else test2 = false;
                if (test1 === false && test2 === false) return false;
                if (test1 === true || test2 === true) return true;
            }
            left++;
            right--;
        }
        return test1 || test2;
    }
    return isPalin(0, s.length - 1, 0);
};