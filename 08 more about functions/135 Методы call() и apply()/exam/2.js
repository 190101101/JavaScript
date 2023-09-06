const book = function(flightNumber, passengerName){
	this.bookings.push({flight: `${this.iataCode}${flightNumber}`, passengerName});
}

const airline1 = {
	airlineName: 'SkyUp Flights',
	iataCode: 'AE123',
	bookings: [],
}

const airline2 = {
	airlineName: 'EuroFlights',
	iataCode: 'BY987',
	bookings: [],
}

book.call(airline1, 159, 'Ketty The Cat');
console.log(airline1);

book.apply(airline2, [465, 'Lily']);
console.log(airline2);