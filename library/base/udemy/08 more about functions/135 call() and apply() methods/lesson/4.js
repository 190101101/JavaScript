const book = function(flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
	this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
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

/*
book.apply(airline2, flightData);
*/

const flightData = [111, 'Nick Wong'];
book.call(airline2, ...flightData);
console.log(airline2);
