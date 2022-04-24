
var UndergroundSystem = function() {
    //{id: {stationName, startTime}}
    //{startStation: {endStation: {total, count}}
    this.customers = {};
    this.stations = {};    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.customers[id] = {startStation: stationName, startTime: t};
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
        this.stations[startStation] = {...this.stations[startStation], [stationName]: {total: 0, count: 0}};
    } 
    this.stations[startStation][stationName].total += t - startTime;
    this.stations[startStation][stationName].count += 1;
    delete this.customers[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    return this.stations[startStation][endStation].total / this.stations[startStation][endStation].count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */