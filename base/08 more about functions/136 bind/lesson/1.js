const airline1 = {
	airlineName: 'Skype',
	iataCode: 'SU',
	bookings: [],
	book: function(flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticket on ${this.iataCode} ${flightNumber}`);
		this.bookings.push({
			flight: `${this.iataCode}${flightNumber}`, 
			passengerName,
		});
	}
}

const airline2 = {
	airlineName: 'EuroFlights',
	iataCode: 'EF',
	bookings: [],
}

//
const book = airline1.book;

//
const bookAirline2 = book.bind(airline2, 45, 'Jon');
bookAirline2();

//
const bookAirline2Flight21 = book.bind(airline2, 21);
bookAirline2Flight21('ketty');
bookAirline2Flight21('lana');