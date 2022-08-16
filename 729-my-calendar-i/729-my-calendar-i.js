
var MyCalendar = function() {
    this.array = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (const [bookedStart, bookedEnd] of this.array) {
        if (start < bookedEnd && bookedStart < end) {
            return false;
        }
    }
    this.array.push([start, end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */