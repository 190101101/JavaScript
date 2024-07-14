'use strict'

let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'White';
console.log(lastName, oldLastName);

const jane = {
	firstName: 'Jane',
	lastName: 'Brown',
	age: 21,
};

const marriedJane = jane;
marriedJane.lastName = 'White';

console.log('Jane:', jane);
console.log('married Jane:', marriedJane);