const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
	book(flightNumber, passengerName){
		console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
		this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
	},
}

airline1.book(346, 'Jim Green');
airline1.book(635, 'Jon Bones');

console.log(airline1);

const airline2 = {
	airlineName: 'EuroFlights',
	iataCode: 'EF',
	bookings: [],
}

const book = airline1.book;
// book(345, 'Linda wilams');

book.call(airline2, 345, 'Linda wilams');
book.call(airline1, 111, 'Bob Smith');

console.log(airline2);
