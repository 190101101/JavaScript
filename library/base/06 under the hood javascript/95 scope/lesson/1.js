'use strict'

function getAge(birthYear){
	const age = 2022 - birthYear;
	
	function printAge(){
		const info = `${firstName} is ${age}, born in ${birthYear}`;
		console.log(info);
	}

	printAge();

	return age;
}

const firstName = 'Cookie';
getAge(2016);