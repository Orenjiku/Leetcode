/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let timeArr = time.split('');
    for (let i = 0; i < timeArr.length; i++) {
        if (timeArr[i] === '?' && i === 0) {
            if (parseInt(timeArr[i + 1]) <= 3 || timeArr[i + 1] === '?') timeArr[i] = '2';
            else if (parseInt(timeArr[i + 1]) > 3) timeArr[i] = '1';
        } else if (timeArr[i] === '?' && i === 1) {
            if (parseInt(timeArr[i - 1]) === 2) timeArr[i] = '3';
            else if (parseInt(timeArr[i - 1]) < 2) timeArr[i] = '9';
        } else if (timeArr[i] === '?' && i === 3) {
            timeArr[i] = 5;
        } else if (timeArr[i] === '?' && i === 4) {
            timeArr[i] = 9;
        }
    }
    return timeArr.join('');
};