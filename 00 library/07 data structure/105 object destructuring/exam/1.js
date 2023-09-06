'use strict';

const user = {
	firstName: 'cookie',
	lastName: 'cookie',
	age: 6,
	job: {
		firstJob: 'meow',
		secondJob: 'dev',
	},
	live: 'baku',
}

console.log(user);

const {job: {firstJob:fJob, secondJob: sJob}} = user;
console.log(fJob, sJob);


let userName = 'apsi';
let userAge = 11;

console.log(userName, userAge);

const obj = {userName: 'orxan', userAge: 31};
({userName, userAge} = obj);

console.log(userName, userAge);

