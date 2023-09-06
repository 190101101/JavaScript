const restaurant = new Map();

restaurant
	.set('name', 'Bench')
	.set(1, 'London', 'England')
	.set(2, 'Paris', 'France')
	.set(3, 'Kiev', 'Ukraine')
	.set('categories', [
		'Japanese',
		'Sushi',
		'Vegetarian',
		'Organic'
	])
	.set('open', 0).set('close', 23)
	.set(true, 'Bench is open :)')
	.set(false, 'Bench is closed :)');

restaurant.set(document.querySelector('h2'), 'Heading');
console.log(restaurant);
