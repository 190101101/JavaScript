book = function (flightNumber, passengerName){
	console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
	this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
}

const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],

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

const bookAirline1 = book.bind(airline1);
bookAirline1(19, 'Tyler Durden');
console.log(airline1);

const bookAirline2 = book.bind(airline2);
bookAirline2(523, 'John Don');
console.log(airline2);
