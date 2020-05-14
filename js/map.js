var map = document.querySelector('#mapid');
var loc = JSON.parse(map.dataset.loc).map(x => parseFloat(x))

var mymap = L.map('mapid').setView(loc, 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'TODO: add attribution',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoic2Ftczk2IiwiYSI6ImNrYTc4eDFvbTAwdGEzMG10eWk1d3Z2c3QifQ.fOFRXNsIZ7xBQ4VtkWvJyw'
}).addTo(mymap);

var marker = L.marker(loc).addTo(mymap);
