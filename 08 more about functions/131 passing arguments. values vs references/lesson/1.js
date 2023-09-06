const flightNumber = 'BV328';

const passenger1 = {
	firstName: 'Jack',
	lastName: 'Brown',
	passport: 'HF128490',
};

const checkIn = function(flight, passenger){
	flight = 'bv328';

	passenger.firstName = passenger.firstName.toLowerCase();
	passenger.lastName = passenger.lastName.toLowerCase();

	if(passenger.passport === 'HF128490'){
		console.log('welcome on the board');
	}else{
		console.log('incorrect passport');
	}
}

checkIn(flightNumber, passenger1);

console.log(flightNumber);
console.log(passenger1);