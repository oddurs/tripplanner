$(document).ready(function() {
	$('#hotel-button').click(function() {
		var newHotel = $('#hotel-dropdown option:selected');
		activeDay.hotels.push(newHotel.val());
		$('.itinerary-hotel ul').append('<li>' + newHotel.text() + '<button class="btn btn-xs btn-danger delete-button"><span class="glyphicon glyphicon-minus"></span></button>' + '</li>');
		$('.itinerary-hotel').css('display', 'block');
		$('#itinerary-scroll').css('border', '1px solid #bbb');
		placeAPin(newHotel.val(), all_hotels);
	})
	$('#restaurant-button').click(function() {
		var newRestaurant = $('#restaurant-dropdown option:selected');
		activeDay.restaurants.push(newRestaurant.val());
		$('.itinerary-restaurant ul').append('<li>' + newRestaurant.text() + '<button class="btn btn-xs btn-danger delete-button"><span class="glyphicon glyphicon-minus"></span></button>' + '</li>');
		$('.itinerary-restaurant').css('display', 'block');
		$('#itinerary-scroll').css('border', '1px solid #bbb');
		placeAPin(newRestaurant.val(), all_restaurants);
	})
	$('#todo-button').click(function() {
		var newToDo = $('#thingsToDo-dropdown option:selected');
		activeDay.things_to_do.push(newToDo.val());
		$('.itinerary-todo ul').append('<li>' + newToDo.text() + '<button class="btn btn-xs btn-danger delete-button"><span class="glyphicon glyphicon-minus"></span></button>' + '</li>');
		$('.itinerary-todo').css('display', 'block');
		$('#itinerary-scroll').css('border', '1px solid #bbb');
		placeAPin(newToDo.val(), all_things_to_do);
	})
})

function placeAPin(thingID, catalog) {
	var name,
		locationLat,
		locationLong;


	for(var i in catalog) {
		if(catalog[i]._id === thingID) {
		  locationLat = catalog[i].place[0].location[0];
		  locationLong = catalog[i].place[0].location[1];
		  name = catalog[i].name;
		}
	}

	var myLatLng = new google.maps.LatLng(locationLat, locationLong);
	var marker = new google.maps.Marker({
	    position: myLatLng,
	    title:name
	});

	marker.setMap(map);
}

$(document).on('click', '.delete-button', function () {
	$(this).closest('li').fadeOut(300);
})
