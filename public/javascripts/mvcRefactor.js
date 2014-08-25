
var Day = function () {
	this.hotels = [];
	this.restaurants = [];
	this.things_to_do = [];
	this.markers = [];
}

Day.prototype.addActivity = function (id, type) {
	// adds id to this.type
	this[type].push(id);
	for(var i=0; i<activities[type].length; i++) {
		var currentActivity = activities[type][i];
		if(currentActivity._id === id) {
			this.addMarker (currentActivity.place.location[0], currentActivity.place.location[1], currentActivity.name);
			this.addToItinerary (currentActivity.name, type);
		}
		// updates DayView based off this.type
			// adds marker based off this.type
			// adds to itinerary based off this.type
	}
};

Day.prototype.addMarker = function (lat, lon, name) {
	var myLatLng = new google.maps.LatLng(lat, lon);
	var marker = new google.maps.Marker({
	    position: myLatLng,
	    title: name
	});

	marker.setMap(map);
};

Day.prototype.addToItinerary = function (name, type) {
	var newClass = ".itinerary-" + type;
	$(newClass + ' ul') 
	$('thisthing ul')
}
