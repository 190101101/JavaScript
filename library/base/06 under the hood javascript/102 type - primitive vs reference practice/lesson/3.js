'use strict'

//Object copying
const sara = {
	firstName: 'Sara',
	lastName: 'Brown',
	age: 21,
	familyMembers: ['Jack', 'Bob', 'Greta']
};

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = 'White';
saraCopy.familyMembers.push('Bill', 'Marta');

console.log('Jane:', sara);
console.log('married Jane:', saraCopy);
