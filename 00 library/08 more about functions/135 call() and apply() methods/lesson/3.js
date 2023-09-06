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

book.call(airline1, 111, 'Bob Smith');
console.log(airline1);

book.call(airline2, 345, 'Linda wilams');
console.log(airline2);
