/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let low = matrix[0][0];
    let high = matrix[matrix.length - 1][matrix[0].length - 1];
    
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        const count = counter(matrix, k, mid);
        if (count >= k) high = mid;
        else low = mid + 1;
    }
    return low;
};

const counter = (matrix, k, mid) => {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = matrix[0].length - 1; j >= 0; j--) {
            if (matrix[i][j] <= mid) {
                count += j + 1;
                break;
            }
        }
    }
    return count;
}