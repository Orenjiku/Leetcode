
var UndergroundSystem = function() {
    //{id: {stationName, startTime}}
    this.customers = {};
    this.stations = {};
    //{startStation: {endStation: [startTime1 - endTime1, startTime2 - endTime2, ...]}
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.customers[id] = this.customers[id] || {startStation: stationName, startTime: t};
    this.stations[stationName] = this.stations[stationName] || {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const {startStation, startTime} = this.customers[id];
    if (!this.stations[startStation].hasOwnProperty(stationName)) {
        this.stations[startStation] = {...this.stations[startStation], [stationName]: [t - startTime]};
    } else {
        this.stations[startStation][stationName].push(t - startTime);
    }
    delete this.customers[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const travelTimes = this.stations[startStation][endStation];
    return travelTimes.reduce((acc, cur) => {
        return acc + cur; 
    }, 0) / travelTimes.length;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */