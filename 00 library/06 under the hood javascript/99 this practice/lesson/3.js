'use strict'

const user123 = {
	birthYear: 1991,
	getAge: function(){
		console.log(2022 - this.birthYear);
	}
};

const user234 = {
	birthYear: 2016,
};

user234.getAge = user123.getAge;

user123.getAge();
user234.getAge();

console.log(user123);
console.log(user234);