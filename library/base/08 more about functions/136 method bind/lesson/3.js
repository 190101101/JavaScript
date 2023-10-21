const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
	book (flightNumber, passengerName){
		console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
		this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
	}
};

const airline2 = {
	airlineName: 'EuroFlights',
	iataCode: 'EF',
	bookings: [],
}

const book = airline1.book;

airline1.airplanes = 200;

airline1.purchaseAirplane = function() {
	console.log(this);
	this.airplanes++;
	console.log(this.airplanes);
}

airline1.purchaseAirplane();

document
	.querySelector('#purchase')
	.addEventListener('click', airline1.purchaseAirplane.bind(airline1));
