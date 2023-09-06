const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';

const checkMiddleSeat = function(seat){
	const seatLetter = seat.slice(-1);
	seatLetter == 'B' || seatLetter == 'E' 
		? console.log('This is middle seat')
		: console.log('This is not a middle seat');
}

checkMiddleSeat('21A');
checkMiddleSeat('7B');
checkMiddleSeat('14E');
