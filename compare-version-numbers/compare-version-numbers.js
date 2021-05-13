/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.match(/[0-9]+/g);
    let v2 = version2.match(/[0-9]+/g);
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        let compare1 = v1[i] === undefined ? 0 : parseInt(v1[i]);
        let compare2 = v2[i] === undefined ? 0 : parseInt(v2[i]);
        if (compare1 > compare2) return 1;
        if (compare2 > compare1) return -1;
    }
    return 0;
};