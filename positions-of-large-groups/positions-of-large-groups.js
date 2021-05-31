/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let output = [];
    let start = 0;
    for (let end = 0; end <= s.length; end++) {
        if (s[start] !== s[end]) {
            if (end - start >= 3) output.push([start, end - 1]);
            start = end;
        }
    }
    return output
};