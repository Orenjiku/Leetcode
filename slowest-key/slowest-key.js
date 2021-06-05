/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    const map = {[keysPressed[0]]: releaseTimes[0]};
    for (let i = 1; i < releaseTimes.length; i++) {
        map[keysPressed[i]] = Math.max(map[keysPressed[i]] || 0, releaseTimes[i] - releaseTimes[i - 1]);
    }
    return Object.keys(map).sort((a, b) => map[b] - map[a] || b.localeCompare(a))[0];
};