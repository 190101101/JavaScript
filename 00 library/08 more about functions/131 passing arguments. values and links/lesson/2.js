'use strict';

const flightNumber = 'BV328';

const passenger1145 = {
	firstName: 'Jack',
	lastName: 'Brown',
	passport: 6545644,
};

const changePassportNumber = function(person){
	person.passport = Math.trunc(Math.random() * 1000000);
}

const checkIn = function(flight, passenger){
	flight = 'bv328';

	passenger.firstName = passenger.firstName.toLowerCase();
	passenger.lastName = passenger.lastName.toLowerCase();

	if(passenger.passport === 6545644){
		console.log('welcome to the board');		
	} else{
		console.log('incorrect passport');		
	}
}

checkIn(flightNumber, passenger1145);
changePassportNumber(passenger1145);
checkIn(flightNumber, passenger1145);

console.log(flightNumber);
console.log(passenger1145);

// This is the same as doing it
const flight = flightNumber;
const passenger = passenger1145;