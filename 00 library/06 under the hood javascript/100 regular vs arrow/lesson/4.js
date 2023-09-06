'use strict'

// arguments keyword
const exprSum = function(a, b){
	console.log(arguments);
	return a + b;
}

console.log(exprSum(1, 2, 3));
console.log(exprSum(1, 2));
