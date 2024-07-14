'use strict'

const orders = new Set([
	'Sushi',
	'Ramen',
	'Tempura',
	'Sushi',
	'Ramen',
	'Tempura'
]);

console.log(new Set(orders));

const mealIngridients = [
	'Rice',
	'Pepper',
	'Garlic',
	'Pepper',
	'Garlic',
	'Meat',
	'Meat',
	'Garlic'
];

const mealIngridientsSet = [...new Set(mealIngridients)];
console.log(mealIngridientsSet);
