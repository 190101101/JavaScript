const book = function(flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticked on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
	this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName});
};

const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
}

const airline2 = {
	airlineName: 'EuroFlights',
	iataCode: 'EF',
	bookings: [],
}

book.call(airline1, 654, 'Jim Green')
book.call(airline1, 742, 'Michael Jordan')
console.log(airline1);

book.call(airline2, 542, 'Danny Black');
book.call(airline2, 123, 'Danny White');
console.log(airline2);

