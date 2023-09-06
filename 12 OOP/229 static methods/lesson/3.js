class Person{
	constructor(name, year){
		this.name = name;
		this.year = year;
	}

	// методы добавляются в свойство .prototype
	printAge(){
		console.log(2023 - this.year);
	}

	greet(){
		console.log(`hello my name is ${this.name}!`);
	}

	// static method
	static highFive(){
		console.log('high Five');
	}
}

const kuki = new Person('kuki', 2015);
kuki.greet();


// kuki.highFive();
Person.highFive();