'use strict'

function getAge(birthYear){
	const age = 2022 - birthYear;
	
	function printAge(){
		const info = `${firstName} is ${age}, born in ${birthYear}`;
		console.log(info);

		if(age <= 18){
			var isAdult = true;
			const adult = `${firstName} is young`;
			console.log(adult)

			function sum(a, b){
				return a + b;
			}

			console.log(sum(11, 13));
		}
		console.log(isAdult);
		// console.log(sum(11, 13)); error
		// console.log(adult) error
	}

	printAge();
	// console.log(isAdult); error

	return age;
}

const firstName = 'Cookie';
getAge(2016);