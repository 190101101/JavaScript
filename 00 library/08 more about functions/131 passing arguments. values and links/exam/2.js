'use strict';

const flightNumber = 'BV328';
const passenger1145 = {
	firstName: 'Jack',
	lastName: 'Brown',
	passport: 123490,
};

const changePassportNumber = function(person){
	person.passport = Math.trunc(Math.random() * 100000000);
}

const checkIn = function(flight, passenger){
	flight = 'bv328';

	passenger.firstName = passenger.firstName.toLowerCase();
	passenger.lastName = passenger.lastName.toLowerCase();

	if(passenger.passport === 123490){
		console.log('welcome to the board');		
	} else{
		console.log('incorrect passport');		
	}
}

changePassportNumber(passenger1145);
checkIn(flightNumber, passenger1145);

console.log(passenger1145);