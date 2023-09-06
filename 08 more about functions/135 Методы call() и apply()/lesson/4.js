const book = function(flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticket on ${this.iataCode}${flightNumber}`);
	this.bookings.push({
		flight: `${this.iataCode}${flightNumber}`, 
		passengerName,
	});
};

const airline1 = {
	airlineName: 'Skype',
	iataCode: 'SU',
	bookings: [],
}

const airline2 = {
	airlineName: 'EuroFlights',
	iataCode: 'EF',
	bookings: [],
}

// apply / old approach
const flightData2 = [123, 'Nick Wong'];
book.apply(airline2, flightData2);
console.log(airline2);
