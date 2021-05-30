/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const result = [];
    for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            if ((hour.toString(2).match(/1/g) || []).length + (minute.toString(2).match(/1/g) || []).length === turnedOn) {
                result.push(`${hour}:${minute < 10 ? '0' + minute : minute}`);
            }
        }
    }
    return result;
};