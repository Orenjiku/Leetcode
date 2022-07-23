/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const tupleArr = nums.map((num, idx) => [num, idx]);
    const countArr = new Array(nums.length).fill(0);
    mergeSort(tupleArr, countArr);
    return countArr;
};

const mergeSort = (arr, countArr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), countArr);
    const right = mergeSort(arr.slice(mid), countArr);
    return merge(left, right, countArr);
}

const merge = (left, right, countArr) => {
    const sorted = []
    let pL = 0;
    let pR = 0;
    let count = 0;
    while (pL < left.length && pR < right.length) {
        if (left[pL][0] <= right[pR][0]) {
            countArr[left[pL][1]] += count;
            sorted.push(left[pL]);
            pL++;
        } else {
            count++;
            sorted.push(right[pR]);
            pR++;
        }
    }
    while (pL < left.length) {
        sorted.push(left[pL]);
        countArr[left[pL][1]] += count;
        pL++;
    }
    while (pR < right.length) {
        sorted.push(right[pR]);
        pR++;
    }
    return sorted;
}