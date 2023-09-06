const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
	book (flightNumber, passengerName){
		console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
		this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
	}
};

const airline2 = {
	airlineName: 'EuroFlights',
	iataCode: 'EF',
	bookings: [],
}

const book = airline1.book;

const bookAirline2 = book.bind(airline2, 34, 'John Doe');
bookAirline2();

console.log(airline2);
