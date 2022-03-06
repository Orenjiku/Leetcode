/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if(finalSum % 2) return [];
    let i = 2;
    const res = [];
    
    while(true){
        finalSum = finalSum - i;
        
        if(finalSum <= i) {
            res.push(i + finalSum)
            break;
        }
        res.push(i)
        i+=2;
    }    
    return res
};