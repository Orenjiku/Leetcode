/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    return (salary.reduce((acc, cur) => acc += cur) - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2);
};