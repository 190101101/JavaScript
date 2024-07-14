class Person{
	constructor(fullname, year){
		this.fullname = fullname;
		this.year = year;
	}

	// методы добавляются в свойство .prototype
	printAge(){
		console.log(2023 - this.year);
	}

	greet(){
		console.log(`hello my name is ${this.fullname}!`);
	}

	get age(){
		return 2023 - this.year;
	}

	set fullname(personName){
		if(personName.includes(' ')){
			this._fullname = personName;
		}else{
			console.log('The full name must consist of the first and last name!');
		}
	}

    get fullname() {
		return this._fullname;
    }

	// static method
	static highFive(){
		console.log('high Five');
	}
}

class Student extends Person{
	constructor(fullname, year, dept){
		// обязательно писать в самом начале
		super(fullname, year);
		this.dept = dept;
	}

	introduce(){
		console.log(`My name is ${this.fullname} and i study at the ${this.dept}`);
	}

	greet(){
		console.log(`hello my name is ${this.fullname} and i am student!`);
	}
}


const apsi = new Student('apsi mapsi', 2009, 'programming');

// console.log(apsi);
apsi.introduce();

apsi.greet();