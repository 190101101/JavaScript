'use strict'

const restaurant = new Map();
console.log(restaurant)

restaurant.set('name', 'Bench');
restaurant.set(1, 'London, England');
restaurant.set(2, 'Paris, France');
restaurant.set(3, 'Kiev, Ukraine');

restaurant
	.set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
	.set('open', 10)
	.set('close', 23)
	.set(true, 'Bench is open: :)')
	.set(false, 'Bench is closed :(');


console.log(restaurant);

const currentTime = 22;

console.log(
	restaurant.get(
		currentTime > restaurant.get('open') &&
		currentTime < restaurant.get('close')
	)
);

console.log(restaurant.has('categories'));
console.log(restaurant.has('category'));

restaurant.delete(3)
console.log(restaurant);
console.log(restaurant.size);
restaurant.clear();
console.log(restaurant);
