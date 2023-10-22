'use stric';


const displayCountryByGPS = (lat, lng) => {
	fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		console.log(`You are in ${data.countryName}`);
	})
} 

displayCountryByGPS(35.756, 139.256);

