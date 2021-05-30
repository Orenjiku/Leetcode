/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const dateArr = date.split('-');
    const months = [31, 28, 31 ,30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dateArr[0] % 4 === 0) months[1] = 29;
    let totalDays = 0;
    for (let i = 0; i < Number(dateArr[1]); i++) {
        totalDays += months[i];
    }
    return totalDays - (months[Number(dateArr[1]) - 1] - Number(dateArr[2]));
};