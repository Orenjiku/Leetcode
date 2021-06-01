/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    logs.sort((a, b) => {
        const idA = a.match(/^[a-z0-9]+(?= )/)[0];
        const logA = a.match(/(?<= )[a-z0-9 ]+$/)[0];
        const idB = b.match(/^[a-z0-9]+(?= )/)[0];
        const logB = b.match(/(?<= )[a-z0-9 ]+$/)[0];
        if (/[a-z]/.test(logA[0]) && /[0-9]/.test(logB[0])) {
            return -1;
        } else if (/[0-9]/.test(logA[0]) && /[a-z]/.test(logB[0])) {
            return 1;
        } else if (/[a-z]/.test(logA[0]) && /[a-z]/.test(logB[0])) {
            return logA.localeCompare(logB) || idA.localeCompare(idB);
        } else {
            return 0;
        }
    });
    return logs;
};