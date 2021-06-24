/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    
    let result = [];
    traverse(0, '', result, digits, map);
    return result;
}

const traverse = (i, str, result, digits, map) => {
    if (i === digits.length) {
        result.push(str);
        return;
    }

    for (let letter of map[digits[i]]) {
        traverse(i + 1, str + letter, result, digits, map)
    }
}