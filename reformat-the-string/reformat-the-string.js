/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const lets = s.match(/[a-z]/g) || [];
    const nums = s.match(/\d/g) || [];
    if (Math.abs(lets.length - nums.length) > 1) return '';
    
    const reformatStr = (a, b, str) => {
        if (b.length > a.length) return reformatStr(b, a, '');
        while (a.length > 0) {
            let charB = b.length > 0 ? b.pop() : '';
            str += a.pop() + charB;
        }
        return str;
    }
    return reformatStr(lets, nums, '');
};