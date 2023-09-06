const Person = function(name, year){
	this.name = name;
	this.year = year;
}

Person.prototype.printAge = function(){
	console.log(2023 - this.year);
}

const Student = function(name, year, dept){
	Person.call(this.name, this.year);
	this.dept = dept;
}

// bind prototypes
Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype; // wrong

Student.prototype.introduce = function(){
	console.log(`my name is ${this.name} and i study on the ${this.dept} department`)
}

const apsi = new Student('apsi', 2009, 'programing');
console.log(apsi);

apsi.introduce();

console.log(apsi.__proto__)
console.log(Object.getPrototypeOf(apsi));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(apsi)));

console.log(Student.prototype.constructor);
console.dir(Student.prototype.constructor);

console.log(apsi instanceof Student);
console.log(apsi instanceof Person);