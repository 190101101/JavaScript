'use strict';

const Person = function(name, year){
	// Instance properties - свойство экземпляра 
	this.name = name;
	this.year = year;

	// wrong
	this.printAge = function(){
		console.log(2022 - this.year);
	}
}

const kuki = new Person('kuki', 2015);

console.log(kuki.name);
console.log(kuki.year);

const jack = 'jack';

console.log(kuki instanceof Person);
console.log(jack instanceof Person);


