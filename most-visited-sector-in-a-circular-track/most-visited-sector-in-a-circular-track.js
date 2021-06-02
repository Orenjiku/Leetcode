/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    const arr = new Array(n).fill(0);
    let max = 1;
    let j = rounds[0] - 1;
    arr[j] = 1;
    for (let i = 1; i < rounds.length; i++) {
        let count = rounds[i] < rounds[i - 1] ? n - (rounds[i - 1] - rounds[i]) : rounds[i] - rounds[i - 1];
        while (count > 0) {
            j = (j + 1) % n;
            arr[j] += 1;
            max = Math.max(max, arr[j]);
            count--;
        }
    }
    return arr.reduce((acc, cur, i) => {
        if (cur === max) acc.push(i + 1);
        return acc;
    }, [])
};