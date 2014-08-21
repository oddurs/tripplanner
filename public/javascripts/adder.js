$(document).ready(function() {
	$('#hotel-button').click(function() {
		var newToDo = $('#hotel-dropdown option:selected').text();
		$('.itinerary-hotel ul').append('<li>' + newToDo + '</li>');
	})
	$('#restaurant-button').click(function() {
		var newToDo = $('#restaurant-dropdown option:selected').text();
		$('.itinerary-restaurant ul').append('<li>' + newToDo + '</li>');
	})
	$('#todo-button').click(function() {
		var newToDo = $('#thingsToDo-dropdown option:selected').text();
		$('.itinerary-todo ul').append('<li>' + newToDo + '</li>');
	})
})