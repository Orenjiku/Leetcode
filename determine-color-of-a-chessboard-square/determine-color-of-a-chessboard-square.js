/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return coordinates[0].charCodeAt() % 2 === coordinates[1] % 2 ? false : true;
};