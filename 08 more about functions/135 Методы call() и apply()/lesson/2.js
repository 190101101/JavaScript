const airline1 = {
	airlineName: 'Skype',
	iataCode: 'SU',
	bookings: [],
	book (flightNumber, passengerName){
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


// airline1.book(346, 'Jim Green');
// airline1.book(635, 'Michael Jordon');

const book = airline1.book;

book.call(airline1, 465, 'Bob Smith');
console.log(airline1.bookings);

book.call(airline2, 346, 'Jim Green');
book.call(airline2, 635, 'Michael Jordon');
console.log(airline2.bookings);