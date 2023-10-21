'use strict'

//Object copying
const sara = {
	firstName: 'Sara',
	lastName: 'Brown',
	age: 21,
};

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = 'White';

console.log('Jane:', sara);
console.log('married Jane:', saraCopy);
