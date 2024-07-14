const Person = function(name, year){
	this.name = name;
	this.year = year;
}

const kuki = new Person('kuki', 2015);
const apsi = new Person('apsi', 2009);

Person.prototype.printAge = function(){
	console.log(2022 - this.year);
}

kuki.printAge();

console.log(kuki.__proto__);
console.log(kuki.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(kuki));
console.log(Person.prototype.isPrototypeOf(Person));