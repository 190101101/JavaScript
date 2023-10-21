'use strict'

/*arrow not have arguments*/
const numSum = (a, b) => {
	console.log(arguments);
	return a + b;
}

// Uncaught ReferenceError: arguments is not defined
console.log(numSum(1, 2, 3));
