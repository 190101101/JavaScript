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

const airline3 = {
	airlineName: 'USFlights',
	iataCode: 'UF',
	bookings: [],
}

const book = airline1.book;

const bookAirline2 = book.bind(airline2);
bookAirline2(523, 'John Don');
console.log(airline2);

const bookAirline3 = book.bind(airline3);
bookAirline3(456, 'Jane Doe');
console.log(airline3);

const bookAirline3Flight21 = book.bind(airline3, 21, 'Jenny BoB');
bookAirline3Flight21();
console.log(airline3);
