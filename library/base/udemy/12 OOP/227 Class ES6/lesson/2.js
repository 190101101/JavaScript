class Person{
	constructor(name, year){
		this.name = name;
		this.year = year;
	}

	printAge(){
		console.log(2023 - this.year);
	}
}

const kuki = new Person('kuki', 2015);

kuki.printAge();

console.log(kuki.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(kuki) === Person.prototype);

Person.prototype.greet = function(){
	console.log(`hello my name is ${this.name}!`);
}

kuki.greet();