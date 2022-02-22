/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let minRate = Infinity;
    while (left <= right) {
        const k = Math.floor((left + right) / 2);
        const hoursToEat = getHoursToEat(piles, k);
        if (hoursToEat > h) {
            left = k + 1;
        } else if (hoursToEat <= h) {
            right = k - 1;
            minRate = Math.min(minRate, k);
        }
    }
    return minRate
};

const getHoursToEat = (piles, rate) => {
    return piles.reduce((totalHours, pile) => {
        totalHours += Math.ceil(pile / rate);
        return totalHours;
    }, 0);
}