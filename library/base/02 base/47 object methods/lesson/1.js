user = {
	name: 'cookie',
	age: 7,
	job: 'meow',
	birthYear: 2015,
	familyMembers: ['kikusi', 'kikus'],
	location: 'Baki',
	hasDriverLicense: true,
	calcAge: function(){
		this.age = 2022 - this.birthYear;
		return 2022 - this.birthYear;
	}
};

console.log(user.calcAge())
console.log(user.age)
console.log(user.age)
console.log(user.age)
