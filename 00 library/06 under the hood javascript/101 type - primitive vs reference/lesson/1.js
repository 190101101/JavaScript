'use strict'

let a = 1;
let b = a;

a = 2;

console.log(a)
console.log(b)

const x = {
	foo: 'bar',
	a: 1,
};

const y = x;

y.a = 2;

console.log('object x: ', x);
console.log('object y: ', y);