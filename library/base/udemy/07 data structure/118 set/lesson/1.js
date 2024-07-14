'use strict'

console.log(new Set());
console.log(new Set('Hello'));

const orders = new Set([
	'Sushi',
	'Ramen',
	'Tempura',
	'Sushi',
	'Ramen',
	'Tempura'
]);

console.log(orders);

console.log(new Set(orders).size);
console.log(new Set(orders).has('Sushi'));

orders.add('Edamame');
orders.delete('Edamame');
// orders.clear();

console.log(orders);

for(const order of orders){
	console.log(order);
}