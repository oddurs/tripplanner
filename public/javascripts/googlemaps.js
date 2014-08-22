$(window).resize(function() {
  $('.row').css('height', ($(window).height() - 50));
});

var map;

function initialize_gmaps() {
 
  // initialize new google maps LatLng object
  var myLatlng = new google.maps.LatLng(40.722319, -73.996525);
 
  // set the map options hash
  var mapOptions = {
    scrollwheel:false,
    center:myLatlng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 
  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById("map-canvas");
 
  // initialize a new Google Map with the options
  map = new google.maps.Map(map_canvas_obj, mapOptions);
 
  // Add the marker to the map
  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
  });

  // Add the marker to the map by calling setMap()
  marker.setMap(map);
}
 
$(document).ready(function() {
  $('.row').css('height', ($(window).height() - 50));
  initialize_gmaps();
}); 