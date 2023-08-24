var map = L.map('map').setView([5.595883,-0.187689], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([5.595883,-0.187689]).addTo(map)
		.bindPopup('The Technology Sandbox<br> Where Andy is sitting this very moment')
		.openPopup();	

