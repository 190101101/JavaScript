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

	get age(){
		return 2023 - this.year;
	}
}


const kuki = new Person('kuki', 2015);

console.log(kuki.age);
