const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],

};

airline1.airplanes = 200;

airline1.purchaseAirplane = function(){
	this.airplanes++;
	console.log(this);
	console.log(this.airplanes);
}

document.
	querySelector('#purchase')
	.addEventListener('click', airline1.purchaseAirplane.bind(airline1));