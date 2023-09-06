const checkMiddleSeat = function(seat){
	const seatLetter = seat.slice(-1);
	console.log(
		seatLetter === 'B' || seatLetter === 'E' 
		? 'This is a middle seat' : 'This is not a middle seat'
	);
}

checkMiddleSeat('21A');
checkMiddleSeat('7B');
checkMiddleSeat('14E');

console.log(typeof new String('Hello'));
console.log(typeof new String('Hello').slice(2));