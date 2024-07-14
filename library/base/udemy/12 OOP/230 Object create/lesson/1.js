const PersonProto = {
	printAge(){
		console.log(2023 - this.year);
	},

	initPerson(name, year){
		this.name = name;
		this.year = year;
	}
};

const kuki = Object.create(PersonProto);
kuki.year = 2015;
kuki.printAge();

console.log(Object.getPrototypeOf(kuki));

const ketty = Object.create(PersonProto);

ketty.initPerson('ketty', 2022);
ketty.printAge();