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

book.call(airline1, 123, 'John Jones');

const flightData = [465, 'Lily'];
book.call(airline1, ...flightData);

console.log(airline1);