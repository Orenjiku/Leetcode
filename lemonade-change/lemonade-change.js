/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const change = {5: 0, 10: 0, 20: 0};
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            change[5]++;
        } else if (bills[i] === 10) {
            if (change[5] === 0) return false;
            else {
                change[5]--;
                change[10]++;
            }
        }
        if (bills[i] === 20) {
            if (change[10] > 0 && change[5] > 0) {
                change[10]--;
                change[5]--;
            } else if (change[5] >= 3) {
                change[5] -= 3;
            } else {
                return false;
            }
            change[20]++;
        }
    }
    return true;
};