/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let left = 0;
    let right = 10 ** 20;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isPossible(mid, time, totalTrips)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
};

const isPossible = (t, time, totalTrips) => {
    let count = 0;
    for (let i = 0; i < time.length; i++) {
        count += Math.floor(t / time[i]);
        if (count >= totalTrips) return true;
    }
    return false;
}