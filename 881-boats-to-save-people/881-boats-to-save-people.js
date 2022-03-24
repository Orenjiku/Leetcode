/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let lt = 0;
    let rt = people.length - 1;
    let count = 0;
    while (lt <= rt) {
        count++;
        if (people[lt] + people[rt] <= limit) {
            lt++;
        }
        rt--;
    }
    return count;
};