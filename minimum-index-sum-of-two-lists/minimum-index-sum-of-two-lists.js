/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let minSum = Infinity;
    const common = [];
    for (let i = 0; i < list1.length; i++) {
        const idx2 = list2.indexOf(list1[i]);
        if (idx2 !== -1 && i + idx2 < minSum) {
            common.length = 0;
            common.push(list1[i]);
            minSum = i + idx2;
        } else if (idx2 !== -1 && i + idx2 === minSum) {
            common.push(list1[i]);
        }
    }
    return common;
};