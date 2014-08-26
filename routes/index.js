var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', function(req, res) {
  models.Hotel.find(function(err, hotels) {
  	models.Restaurant.find(function(err, restaurants) {
  		models.ThingsToDo.find(function(err, thingsToDo) {
		    res.render('index', { 'hotels': hotels, 'restaurants': restaurants, 'thingsToDo': thingsToDo});
  		})
  	})
  });
});

// router.get('/', function(req, res) {
// 	models.Day.find(function(err, days) {
// 		res.render('index', {'days':days});
// 	})
// })

module.exports = router;
