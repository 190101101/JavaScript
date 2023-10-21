class Cat {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	getname(){
		return this.name;
	}

	getage(){
		return this.age;
	}
}

const kuki = new Cat('kuki', 7);
console.log(kuki.getname())
console.log(kuki.getage())