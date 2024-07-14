'use strict'

const restaurant = new Map();
console.log(restaurant)

restaurant
	.set('name', 'Bench')
	.set(1, 'London, England')
	.set(2, 'Paris, France')
	.set(3, 'Kiev, Ukraine')
	.set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
	.set('open', 10)
	.set('close', 23)
	.set(true, 'Bench is open: :)')
	.set(false, 'Bench is closed :(')

const arr = [1,2,3];
restaurant.set(arr, 'Hello');
console.log(restaurant.get(arr))