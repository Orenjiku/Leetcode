/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    const findDistance = (start, arr, direction) => {
        let distance = 0;
        while (start !== destination) {
            if (direction > 0) {
                distance += arr[start];
                start = (start + direction) % arr.length;
            } else {
                start = (start + direction + arr.length) % arr.length; 
                distance += arr[start];
            }
        }
        return distance;
    }
    return Math.min(findDistance(start, distance, 1), findDistance(start, distance, -1));
};