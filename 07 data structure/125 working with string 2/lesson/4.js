const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';



const checkLuggage = function(luggage){
	const luggageLower = luggage.toLowerCase();
	if(luggageLower.includes('knife') || luggageLower.includes('gun')){
		console.log('You are not allowed on board');
	}else{
		console.log('Welcome to the borard!');
	}
}

checkLuggage('Food, jeans, sock and swiss Knife');
checkLuggage('Laptop, and food');
checkLuggage('Camera, food, gun for protection');