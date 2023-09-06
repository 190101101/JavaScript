const restaurant = new Map();

restaurant.set('name', 'Bench');
restaurant.set(1, 'London', 'England');
restaurant.set(2, 'Paris', 'France');
restaurant.set(3, 'Kiev', 'Ukraine');

restaurant.set('categories', [
	'Japanese',
	'Sushi',
	'Vegetarian',
	'Organic'
]);

restaurant.set('open', 0).set('close', 24)
.set(true, 'Bench is open :)').set(false, 'Bench is closed :)');

console.log(restaurant);