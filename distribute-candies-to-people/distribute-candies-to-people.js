/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let count = 1;
    const result = new Array(num_people).fill(0);
    let i = 0;
    while (candies > 0) {
        i = i % result.length;
        if (count < candies) result[i] += count;
        else {
            result[i] += candies;
            break;
        }
        i++;
        candies -= count;
        count++;
    }
    return result;
};