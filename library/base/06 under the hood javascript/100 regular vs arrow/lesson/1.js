'use strict'

var firstName = 'apsi';

const user123 = {
	firstName: 'cookie',
	birthYear: 1991,
	getAge: function(){
		console.log(2022 - this.birthYear);
	},
	sayGreeting: () => console.log(`hello, i am ${this.firstName}`)
};

user123.getAge();
user123.sayGreeting();