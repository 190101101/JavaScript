const book = function(flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
	this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
};

const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
};

const airline2 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
};


book.call(airline1, 231, 'Johnny Jones',);
console.log(airline1);

book.call(airline2, 231, 'Daniel Cormier',);
console.log(airline2);