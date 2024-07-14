const book = function(flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticked on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
	this.bookings.push({flight: `${this.iataCode} ${flightNumber} `, passengerName});
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

const flightData = [111, 'Nick Wong'];
book.call(airline1, ...flightData);
console.log(airline1);
