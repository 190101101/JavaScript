const PersonProto = {
	printAge(){
		console.log(2023 - this.year);
	},

	initPerson(name, year){
		this.name = name;
		this.year = year;
	},
};

const StudentProto = Object.create(PersonProto);

StudentProto.initStudent = function(name, year, dept){
	PersonProto.initPerson.call(this, name, year);
	this.dept = dept;
}

StudentProto.introduce = function(){
	console.log(`Hello my name is ${this.name} and i am study ${this.dept} dept`);
}

const jack = Object.create(StudentProto);

jack.initStudent('jack', 2009, 'programming');
jack.introduce();
jack.printAge();