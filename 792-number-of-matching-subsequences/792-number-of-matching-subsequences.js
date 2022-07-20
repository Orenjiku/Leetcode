/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    const map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!(char in map)) map[char] = [];
        map[char].push(i);
    }
    
    for (const word of words) {
        let prevIdx = -Infinity;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in map)) break;
            const charIdx = binarySearch(prevIdx, map[word[i]]); 
            if (charIdx === -1) break;
            prevIdx = charIdx;
            if (i === word.length - 1) count++;
        }
    }
    return count;
};

const binarySearch = (target, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) return arr[i]
    }
    // let i = 0;
    // let j = arr.length - 1;
    // while (i <= j) {
    //     const mid = Math.floor((i + j) / 2);
    //     if (arr[mid - 1] > target) {
    //         j = mid - 1;
    //     } else if (arr[mid] > target) {
    //         return arr[mid];
    //     } else {
    //         i = mid + 1;
    //     }
    // }
    return -1;
}