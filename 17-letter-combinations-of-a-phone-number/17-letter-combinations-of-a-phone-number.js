/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const res = [];
    const phone = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    dfs(0, [], digits, phone, res)
    return res;
};

const dfs = (i, combo, digits, phone, res) => {
    if (combo.length === digits.length) {
        res.push(combo.join(''));
        return;
    }
    for (const letter of phone[digits[i]]) {
        combo.push(letter);
        dfs(i + 1, combo, digits, phone, res);
        combo.pop();
    }
}