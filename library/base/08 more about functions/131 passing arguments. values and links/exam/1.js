'use strict';

const flightNumber = 'BV328';
const passenger1145 = {
	firstName: 'Jack',
	lastName: 'Brown',
	passport: 'HF123490',
};

const checkIn = function(flight, passenger){
	flight = 'bv328';

	passenger.firstName = passenger.firstName.toLowerCase();
	passenger.lastName = passenger.lastName.toLowerCase();

	if(passenger.passport === 'HF123490'){
		console.log('welcome to the board');		
	} else{
		console.log('incorrect passport');		
	}
}

checkIn(flightNumber, passenger1145);
console.log(flightNumber);
console.log(passenger1145);
