/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const birthDates = logs.reduce((acc, cur) => {
        acc[cur[0]] = (acc[cur[0]] || 0) + 1;
        return acc;
    }, {});
    const deathDates = logs.reduce((acc, cur) => {
        acc[cur[1]] = (acc[cur[1]] || 0) + 1;
        return acc;
    }, {});
    let maxPop = 0;
    let minYear = 1950;
    let curPop = 0;
    for (let i = 1950; i <= 2050; i++) {
        const births = birthDates[i] ? birthDates[i] : 0;
        const deaths = deathDates[i] ? deathDates[i] : 0;
        curPop += births - deaths;
        if (curPop > maxPop) {
            maxPop = curPop;
            minYear = i;
        }
    }
    return minYear;
};