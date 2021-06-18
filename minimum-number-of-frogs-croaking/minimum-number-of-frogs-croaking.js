/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    const croak = new Array(5).fill(0);
    let min = 0;
    for (let i = 0; i < croakOfFrogs.length; i++) {
        if (croakOfFrogs[i] === 'c') {
            croak[0] += 1;
            min = Math.max(min, croak[0]);
        } else if (croakOfFrogs[i] === 'r') {
            croak[1] += 1;
            if (croak[1] > croak[0]) return -1;
        } else if (croakOfFrogs[i] === 'o') {
            croak[2] += 1;
            if (croak[2] > croak[1]) return -1;
        } else if (croakOfFrogs[i] === 'a') {
            croak[3] += 1;
            if (croak[3] > croak[2]) return - 1;
        } else if (croakOfFrogs[i] === 'k') {
            croak[4] += 1;
            if (croak[4] > croak[3]) return -1;
            else {
                croak.forEach((num, i) => croak[i] -= 1)
            }
        }
    }
    return croak.reduce((acc, cur) => acc + cur, 0) === 0 ? min : -1;
};