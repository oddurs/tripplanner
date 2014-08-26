var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', function(req, res) {
	models.Day.find(function(err, days) {
		console.log(days[0].restaurants);
		res.render('index', {days:days});
	})
});

module.exports = router;
