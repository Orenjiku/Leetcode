/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const dateArr = date.split(' ');
    const months = {"Jan" : '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12'};
    return `${dateArr[2]}-${months[dateArr[1]]}-${dateArr[0].match(/\d+/g)[0].padStart(2, '0')}`
};