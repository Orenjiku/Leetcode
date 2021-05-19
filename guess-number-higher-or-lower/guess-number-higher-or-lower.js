/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n
    while (left <= right) {
        const num = left + Math.floor((right - left) / 2);
        if (guess(num) === 0) return num;
        else if (guess(num) < 0) right = num - 1;
        else left = num + 1;
    }
    return -1;
};