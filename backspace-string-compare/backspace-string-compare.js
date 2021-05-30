/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const helper = (str) => {
        const arr = str.match(/[a-z]+#*/g);
        console.log(arr)
        let finalStr = '';
        for (let i = 0; i < arr.length; i++) {
            finalStr += arr[i];
            const hashIdx = finalStr.indexOf('#');
            const hashCount = finalStr.length - hashIdx;
            finalStr = hashIdx === -1 ? finalStr : finalStr.slice(0, hashIdx - hashCount < 0 ? 0 : hashIdx - hashCount);
        }
        return finalStr;
    }
    return helper(s) === helper(t);
};