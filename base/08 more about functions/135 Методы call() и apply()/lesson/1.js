const airline1 = {
	airlineName: 'Skype',
	iataCode: 'SU',
	bookings: [],
	book(flightNumber, passengerName){
		console.log(`${passengerName} has booked a ticket on ${this.iataCode} ${flightNumber}`);
		this.bookings.push({
			flight: `${this.iataCode}${flightNumber}`, 
			passengerName,
		});
	}
}

airline1.book(346, 'Jim Green');
airline1.book(635, 'Michael Jordon');

console.log(airline1.bookings);