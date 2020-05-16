var map = document.querySelector('#mapid');
var loc = JSON.parse(map.dataset.loc).map(x => parseFloat(x))
var pageType = map.dataset.type

var zoomLevel = 2
if (pageType == "single") {
	zoomLevel = 13
}

var mymap = L.map('mapid').setView(loc, zoomLevel);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'TODO: add attribution',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoic2Ftczk2IiwiYSI6ImNrYTc4eDFvbTAwdGEzMG10eWk1d3Z2c3QifQ.fOFRXNsIZ7xBQ4VtkWvJyw'
}).addTo(mymap);

if (pageType == "single") {
	L.marker(loc).addTo(mymap)
		.bindPopup(map.dataset.name)
} else if (pageType == "map") {
	var markers = L.markerClusterGroup();
	fetch("../index.json")
		.then(response => response.json())
		.then(json => json.labs.map(
			function(lab) { 
				if (lab.loc != null) {
					var marker = L.marker(lab.loc);
					marker.bindPopup(lab.name);
					console.log(lab.name);
					markers.addLayer(marker);
				}
			}));

	mymap.addLayer(markers);
}
