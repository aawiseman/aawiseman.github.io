//This is where you will put all your code for your map
//we will walk through these steps together now!


var map = L.map('map').setView([38.8986, -77.0247], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Map by Andrew Wiseman, '
+
		'Imagery © <a href="http://mapbox.com">Mapbox</a>'
}).addTo(map);


L.marker([38.9, -77.0],{
	maxWidth: 1500,
	minWidth: 1200
}).addTo(map)
	.bindPopup("Check out this cool ass marker <img src=http://media.giphy.com/media/Z6f7vzq3iP6Mw/giphy.gif>")




//This is the attribution and you'll need this too!
'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery Â© <a href="http://mapbox.com">Mapbox</a>"'