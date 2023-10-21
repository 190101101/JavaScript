const book = function (flightNumber, passengerName){
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

book.call(airline1, 465, 'Linda Wilams');
console.log(airline1.bookings);

book.call(airline2, 346, 'Jim Green');
book.call(airline2, 635, 'Michael Jordon');
console.log(airline2.bookings);

const flightData1 = [789, 'John Jones'];
book.call(airline1, ...flightData1);
console.log(airline1.bookings);