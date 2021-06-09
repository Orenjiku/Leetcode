/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = {b: 0, a: 0, l: 0, o: 0, n: 0};
    for (let i = 0; i < text.length; i++) {
        if (map.hasOwnProperty(text[i])) map[text[i]]++;
    };
    const minDouble = Math.min(Math.floor(map['l'] / 2), Math.floor(map['o'] / 2));
    return Math.min(minDouble, ...Object.values(map));
};