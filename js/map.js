var map = L.map('map').setView([5.594951,-0.18503], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([5.594951,-0.18503]).addTo(map)
		.bindPopup('The Technology Sandbox<br> Where Yoh is sitting this very moment')
		.openPopup();	

