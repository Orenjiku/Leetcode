/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const totalTrip = new Array(1001).fill(0);
    for (let i = 0; i < trips.length; i++) {
        for (let j = trips[i][1]; j < trips[i][2]; j++) {
            totalTrip[j] += j !== trips[i][2] ? trips[i][0] : -trips[i][0]; 
        }
    }
    let i = 0;
    while (i < totalTrip.length) {
        if (totalTrip[i] > capacity) return false;
        i++;
    }
    return true;
};