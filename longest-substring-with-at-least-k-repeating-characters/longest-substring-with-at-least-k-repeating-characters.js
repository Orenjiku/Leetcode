/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const recursive = (start, end) => {
        const map = {};
        for (let i = start; i < end; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1;
        }
        for (let i = start; i < end; i++) {
            const char = s[i];
            const count = map[char];
            if (count > 0 && count < k) {
                const left = recursive(start, i);
                const right = recursive(i + 1, end);
                return Math.max(left, right);
            }
        }
        return end - start;
    }
    return recursive(0, s.length)
};