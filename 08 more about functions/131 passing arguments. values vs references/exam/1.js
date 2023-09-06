const passenger1 = {
	firstName: 'Jack',
	lastName: 'Brown',
	passport: 1284904,
};

const checkIn = function(passenger){
	if(passenger.passport === 1284904){
		console.log('welcome on the board');
	}else{
		console.log('incorrect passport');
	}	
}

const changePassword = function(passenger){
	passenger.passport = Math.trunc(Math.random() * 100000);
}

checkIn(passenger1);
changePassword(passenger1);
checkIn(passenger1);
