/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const result = new Array(n).fill(0);
    
    for (const [first, last, seats] of bookings) {
        for (let i = first - 1; i < last; i++) {
            result[i] += seats;
        }
    }
    
    return result;
};