'use strict'
// console.log(this);

const getAge = function(birthYear){
	console.log(2022 - birthYear);
	console.log(this);
}

getAge(1991);

const getAge2 = (birthYear) => {
	console.log(2022 - birthYear);
	console.log(this);
}

getAge2(1991);
