'use strict';

const bookings = [];

const makeBooking = function(flightNum, passengesNum = 1, price = 99 * passengesNum){
	const booking = {
		flightNum,
		passengesNum,
		price
	};

	console.log(booking);

	bookings.push(booking);

}

// makeBooking('QW123');
makeBooking('QW123', 3, 390);
makeBooking('QW123', 1);
makeBooking('QW123', 4);
makeBooking('QW123', undefined, 200);