var express = require('express');
var router = express.Router();
var models = require('../models');


router.post('/', function (req, res) {
	var newDay = new models.Day({
		"day_number": req.body.day_number
	});

	newDay.save();
	res.json(newDay);
	// res.redirect("./");
});

router.post('/:day_number/attractions', function (req, res) {
	var day_number = req.params.day_number;
	var attractionId = req.body.attractionId;
	var attractionType = req.body.attractionType;

	models.Day.findOne({_id: day_number}, function(err, day) {		
		var newDay = day[attractionType];
		newDay.push(attractionId);
		day.save();
	})


});

router.get('/dayid/:dayid', function (req, res) {
	models.Day.findOne({"day_number": req.params.dayid}, function (err, days) {
		res.send(days.id);
	});
});

router.get('/', function (req, res) {
	models.Day.find({}, 'day_number hotels restaurants thingsToDo', function (err, days) {
		res.render('index');
		// res.send(days);
	});
});

module.exports = router;