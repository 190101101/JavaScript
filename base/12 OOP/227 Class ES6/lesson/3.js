class Person{
	constructor(name, year){
		this.name = name;
		this.year = year;
	}

	printAge(){
		console.log(2023 - this.year);
	}

	greet(){
		console.log(`hello my name is ${this.name}!`);
	}
}

const kuki = new Person('kuki', 2015);

kuki.printAge();

console.log(kuki.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(kuki) === Person.prototype);

kuki.greet();

// 1. классы не "поднимаются" при помощи hoisting
// 2. классы являются "first class citizens"
// 3. тело класса выполняется в "strict" режиме