const boardPassengers = function(passengerNumber, secondsBeforeBoarding){
	const passengersInGroup = passengerNumber / 2;

	setTimeout(function() {
		console.log(`All ${passengerNumber} passengers are now boarding`);
		console.log(`Each group contains ${passengersInGroup} passengers`);
	}, secondsBeforeBoarding * 1000);

	console.log(`The boarding will start in ${secondsBeforeBoarding} seconds`)
}

boardPassengers(150, 5);