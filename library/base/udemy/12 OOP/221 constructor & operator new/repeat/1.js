'use stric'

const Person = function(personName, personAge){
	this.personName = personName;
	this.personAge = personAge;
};

const kuki = new Person('kuki', 7);
console.log(kuki)

console.log(kuki instanceof Person)