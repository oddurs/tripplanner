var express = require('express');
var router = express.Router();
var models = require('../models');


router.post('/', function (req, res) {
	var newDay = new models.Day({
		"day_number": req.body.day_number
	});

	newDay.save();
	res.send(200,"It worked!");
	// res.redirect("./");
});

router.post('/:dayId/attractions', function (req, res) {

});

router.get('/', function (req, res) {
	models.Day.find({}, 'day_number hotels restaurants thingsToDo', function (err, days) {
		res.render('index', {'day_number': day_number})
	});
});

module.exports = router;