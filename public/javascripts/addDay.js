$('#addDayButton').click(function() {
	var currentDays = $('#daysCounter li').length - 1;
	if(currentDays < 4) {
		$('#addDayButton').before('<li class="dayButton" value="day-' + (currentDays + 1) + '">' + (currentDays + 1) + '</li>');		
	}
});

// $('.dayButton').click(function() {
// 	console.log(this);
// 	var value = $(this).attr('value');
// 	console.log(value);
// })

$('#daysCounter').on('click', 'li', (function() {
	$('.dayButton').addClass('dayButton');
	$('.dayButton').removeClass('active');
	$(this).addClass('active');
	var value = $(this).attr('value');
	console.log(value);
}));