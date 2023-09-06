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
	},
	getSummary: function(){
		return `${this.name}  is a ${this.calcAge()} - year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`;
	}
};

console.log(user.getSummary())
