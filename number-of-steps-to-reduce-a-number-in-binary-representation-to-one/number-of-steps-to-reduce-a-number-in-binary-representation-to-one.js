/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let count = 0;
    let pow = 0n
    let num = 0n
    for( let i = s.length - 1; i >= 0; i-- ){
        if(s[i] === "1"){
            num += 2n ** pow
        }
        pow++
    }

    while (num !== 1n) {
        num = num % 2n === 0n ? num / 2n : num + 1n;
        count++;
    };
    return count;
};