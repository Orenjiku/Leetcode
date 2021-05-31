/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let diff = Infinity;
    let result = [0, 0]
    for (let i = 1; i * i <= area; i++) {
        let l = Number.isInteger(area / i) ? area / i : Infinity;
        let w = i;
        if (Math.abs(l - w) < diff) {
            result = [l, w];
            diff = Math.abs(l - w);
        }
    }
    return result;
};