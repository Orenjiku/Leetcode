/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathArr = path.match(/[^\/]+/g);
    if (pathArr === null) return '/';
    const canonicalPathArr = [];
    let count = 0;
    for (let i = 0; i < pathArr.length; i++) {
        if (count > 0 && pathArr[i] === '..') {
            canonicalPathArr.pop();
            count--;
        } else if (pathArr[i] !== '..' && pathArr[i] !== '.') {
            canonicalPathArr.push(pathArr[i]);
            count++;
        }
    }
    return '/'.concat(canonicalPathArr.join('/'));
};