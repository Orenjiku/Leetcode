/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const helper = (str) => {
        let result = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '#') result.push(str[i]);
            else result.pop();
        }
        return result.join('')
    }
    return helper(s) === helper(t);
};