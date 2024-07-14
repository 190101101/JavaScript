const airline234 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
	book(flightNumber, passengerName){
		console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
		this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
	},
}

airline234.book(346, 'Jim Green');
airline234.book(635, 'Jon Bones');

console.log(airline234);

const airline123 = {
	airlineName: 'EuroFlights',
	iataCode: 'EF',
	bookings: [],
	book(flightNumber, passengerName){
		console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
		this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
	},
}
