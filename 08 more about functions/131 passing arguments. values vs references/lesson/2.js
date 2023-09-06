const flightNumber = 'BV328';

const passenger1 = {
	firstName: 'Jack',
	lastName: 'Brown',
	passport: 1284904,
};

const checkIn = function(flight, passenger){
	flight = 'bv328';

	passenger.firstName = passenger.firstName.toLowerCase();
	passenger.lastName = passenger.lastName.toLowerCase();

	if(passenger.passport === 1284904){
		console.log('welcome on the board');
	}else{
		console.log('incorrect passport');
	}
}

const changePassportNumber = function(person){
	person.passport = Math.trunc(Math.random() * 1000000)
}

checkIn(flightNumber, passenger1);
changePassportNumber(passenger1);
checkIn(flightNumber, passenger1);
