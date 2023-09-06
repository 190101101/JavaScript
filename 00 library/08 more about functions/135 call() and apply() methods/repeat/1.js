const airline1 = {
	airlineName: 'SkyUp',
	iataCode: 'SU',
	bookings: [],
	book(flightNumber, passengerName){
		console.log(`${passengerName} has booked a ticked on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`)
		this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName});
	}
}

airline1.book(654, 'Jim Green')
airline1.book(742, 'Michael Jordan')

console.log(airline1);