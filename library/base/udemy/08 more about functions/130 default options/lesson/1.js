'use strict';

const bookings = [];

const makeBooking = function(
	flightNum, 
	passengersNum = 1, 
	price = 99 * passengersNum
	){

	const booking = {
		flightNum, 
		passengersNum, 
		price
	}

	bookings.push(booking);
	console.log(bookings);
}

makeBooking('QW123');
makeBooking('TU235', 3, 390);
makeBooking('QW345', 1);
makeBooking('QW543', undefined, 4);
