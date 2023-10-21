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

// apply - old approach
book.apply(airline1, [654, 'Jim Green'])
console.log(airline1);

book.apply(airline2, [742, 'Michael Jordan'])
console.log(airline2);
