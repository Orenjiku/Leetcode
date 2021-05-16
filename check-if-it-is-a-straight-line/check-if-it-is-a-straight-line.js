/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true;
    const getSlopeAndIntercept = (coordinates1, coordinates2) => {
        const slope = coordinates2[0] - coordinates1[0] === 0? 'undefined' : (coordinates2[1] - coordinates1[1]) / (coordinates2[0] - coordinates1[0]);
        const intercept = slope === 'undefined' ? coordinates1[0] : coordinates1[1] - (slope * coordinates1[0]);
        return [slope, intercept];
    }
    const comparisonSlopeAndIntercept = getSlopeAndIntercept(coordinates[0], coordinates[1]);
    for (let i = 2; i < coordinates.length; i++) {
        const slopeAndIntercept = getSlopeAndIntercept(coordinates[i], coordinates[0]);
        if (comparisonSlopeAndIntercept[0] !== slopeAndIntercept[0] || comparisonSlopeAndIntercept[1] !== slopeAndIntercept[1]) return false;
    }
    return true;
};