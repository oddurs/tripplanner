// 
// Day
// 

var Day = function () {
	this.hotels = [];
	this.restaurants = [];
	this.things_to_do = [];
}

// day1.addActivity("hotels", 123123);
Day.prototype.addActivity = function(type, id) {
	this[type].push(id);
};

Day.prototype.removeActivity = function(type, id) {
	console.log(this[type]);
	for (var i = 0; i < this[type].length; i++) {
		if (this[type][i] === id) {
			this[type].splice(i,1);
		}
	}
	console.log(this[type]);
};

Day.prototype.addDay = function () {
	return new Day();
};

//
// DayView
//

Day.prototype.dayView = function () {

};

//
// Activity
//

var Activity = function () {

};

//
// ActivityView
//

Activity.prototype.activityView = function () {

};