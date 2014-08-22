$('#addDayButton').click(function() {
	var currentDays = $('#daysCounter li').length - 2;
	if(currentDays < 4) {
		$('#addDayButton').before('<li class="dayButton" value="day' + (currentDays + 1) + '">' + (currentDays + 1) + '</li>');		
	}
});

$('#daysCounter').on('click', 'li', (function() {
	if($(this).attr('id') != 'addDayButton') {
		$('.dayButton').addClass('dayButton');
		$('.dayButton').removeClass('active');
		$(this).addClass('active');
		var value = $(this).attr('value');
		activeDay = window[value];
		changePage(activeDay);
	}
}));

var changePage = function(activeDay) {
	if($(this).attr('id') != 'addDayButton') {

		initialize_gmaps();
		$('#itinerary-scroll ul').empty();

		for(var i in activeDay.hotels) {
			for(var j=0; j<all_hotels.length; j++) {
				if(all_hotels[j]._id === activeDay.hotels[i]) {
					$('.itinerary-hotel ul').append('<li>' + all_hotels[j].name + '</li>');
					placeAPin(activeDay.hotels[i], all_hotels);
				}
			}
		}
		for(var i in activeDay.restaurants) {
			for(var j=0; j<all_restaurants.length; j++) {
				if(all_restaurants[j]._id === activeDay.restaurants[i]) {
					$('.itinerary-restaurant ul').append('<li>' + all_restaurants[j].name + '</li>');
					placeAPin(activeDay.restaurants[i], all_restaurants);
				}
			}
		}
		for(var i in activeDay.things_to_do) {
			for(var j=0; j<all_things_to_do.length; j++) {
				if(all_things_to_do[j]._id === activeDay.things_to_do[i]) {
					$('.itinerary-todo ul').append('<li>' + all_things_to_do[j].name + '</li>');
					placeAPin(activeDay.things_to_do[i], all_things_to_do);
				}
			}
		}
	}
}