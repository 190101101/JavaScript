// console.log(firstName);
// console.log(job); // ReferenceError: Cannot access 'job' before initialization 
// console.log(birthYear); // ReferenceError: Cannot access 'job' before initialization

var firstName = 'cookie';
let job = 'developer';
const birthYear = 2016;

function sum(a, b){
	return a + b;
}

const arrSum = (a, b) => a + b;