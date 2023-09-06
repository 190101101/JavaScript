const book = function(flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticket on ${this.iataCode} ${flightNumber}`);
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
	airlineName: 'UsaAirline',
	iataCode: 'UA',
	bookings: [],
}

book.call(airline2, 346, 'Cookie Cookies');
book.call(airline2, 123, 'Cookies Cookie');
console.log(airline2.bookings);