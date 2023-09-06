const checkLuggage = function(luggage){
	const luggageLower = luggage.toLowerCase();
	luggageLower.includes('knife') || luggageLower.includes('gun') 
		? console.log('You are not allowed on board')
		: console.log('welcome to the board');
}

checkLuggage('Food, jeans, socks and Swiss Knife');
checkLuggage('laptop and food');
checkLuggage('camera, food, Gun for protection');